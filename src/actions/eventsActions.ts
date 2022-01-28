import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IEvent, IEventOriginal } from '../models/IEvent'
import { RootState } from '../store/store'
import EventHelpers from '../utils/eventHelper'
import { makeRequest } from '../utils/makeRequest'
import Urls from '../utils/urls'
import { IDownloadProgress } from '../reducers/eventsReducer'
import JSZip from 'jszip'
import { setError } from './loadingActions'
import fs from 'react-native-fs'
import { IFullEvent } from '../models/IFullEvent'
import { IFullOriginalEvent } from '../models/IFullOriginalEvent'

const prefix = `events/`

export const clearEvent = createAction(`${prefix}clear-event`)
export const setSelectedEvent = createAction<IFullEvent | null>(`${prefix}set-selected-event`)
export const setProgress = createAction<IDownloadProgress>(`${prefix}download-progress`)
export const setIsDownloading = createAction<boolean>(`${prefix}set-is-downloading`)
export const setIsUnzipping = createAction<boolean>(`${prefix}set-is-unzipping`)

type GetEventProps = { refresh?: boolean }
type GetEventsReturn = IEvent[]
export const getEvents = createAsyncThunk<GetEventsReturn, GetEventProps | undefined>(
  `${prefix}get-events`,
  async (props, { getState }) => {
    const { refresh } = props || {}
    const { eventsReducer } = getState() as RootState
    const { events } = eventsReducer
    if (events.length > 0 && !refresh) return events

    const data = await makeRequest({ url: Urls.events, method: 'POST' })
    return (data.Eventos as IEventOriginal[])
      .map(
        (ev): IEvent => ({
          active: ev.activo,
          id: ev.id,
          name: ev.nombre,
          lang: ev.idiomas,
          image: ev.imagen
        })
      )
      .filter(EventHelpers.filterEventBy('BRAND'))
  }
)

type DownloadEventProps = { event: IEvent }
export const downloadEvent = createAsyncThunk<any, DownloadEventProps>(
  `${prefix}download-event`,
  async ({ event }, { dispatch, getState }) => {
    const { id } = event
    const { eventsReducer } = getState() as RootState
    const { isDownloading } = eventsReducer

    if (isDownloading) return
    dispatch(setIsDownloading(true))

    let progress = 0
    const response = await makeRequest({
      method: 'POST',
      responseType: 'arraybuffer',
      url: Urls.downloadEvent,
      data: { id },
      onDownloadProgress: ({ loaded, total }) => {
        if (progress % 5 === 0 || loaded === total) {
          dispatch(setProgress({ loaded, total }))
        }
        progress++
      }
    })
    dispatch(setIsDownloading(false))
    dispatch(setProgress({ loaded: 0, total: 0 }))
    dispatch(setIsUnzipping(true))

    try {
      const resPath = EventHelpers.resourcesPath
      const eventDataDirExists = await fs.exists(resPath)
      if (!eventDataDirExists) {
        await fs.mkdir(resPath)
      }

      const zip = new JSZip()
      const loaded = await zip.loadAsync(response)
      const allFiles = Object.keys(loaded.files)
      const total = allFiles.length
      dispatch(setProgress({ loaded: 0, total }))

      for await (const filename of allFiles) {
        const index = allFiles.indexOf(filename)
        const readZippedFile = zip.file(filename)
        if (readZippedFile) {
          const content = await readZippedFile.async('base64')
          fs.writeFile(`${resPath}${filename}`, content, 'base64')
          await new Promise((res) => setTimeout(res, 10))
        }
        dispatch(setProgress({ loaded: index, total }))
      }

      const legacyString = await fs.readFile(`${resPath}textos.json`, 'utf8')
      const legacyEvent = JSON.parse(legacyString) as IFullOriginalEvent
      const selectedEvent = EventHelpers.legacyToFinalEvent(legacyEvent)

      dispatch(setIsUnzipping(false))
      dispatch(setSelectedEvent(selectedEvent))
    } catch (err: any) {
      dispatch(setIsUnzipping(false))
      dispatch(setError({ key: 'unziping', error: err.message }))
    }

    return
  }
)

export const cleanSelectedEvent = createAsyncThunk(
  `${prefix}clean-selected-event`,
  async (_, { dispatch }) => {
    try {
      await fs.unlink(EventHelpers.resourcesPath)
      dispatch(setSelectedEvent(null))
    } catch (err) {
      console.log(err)
    }
  }
)
