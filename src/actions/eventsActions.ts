import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IEvent, IEventOriginal } from '../models/IEvent'
import { RootState } from '../store/store'
import EventHelpers from '../utils/eventHelper'
import { makeRequest } from '../utils/makeRequest'
import Urls from '../utils/urls'
import { IDownloadProgress } from '../reducers/eventsReducer'
import { IFullEvent } from '../models/IFullEvent'
import { IFullOriginalEvent } from '../models/IFullOriginalEvent'
import RNFetchBlob from 'rn-fetch-blob'
import Config from '../utils/Config'
import { unzip } from 'react-native-zip-archive'

const fs = RNFetchBlob.fs
const prefix = `events/`

export const clearEvent = createAction(`${prefix}clear-event`)
export const setSelectedEvent = createAction<IFullEvent | null>(`${prefix}set-selected-event`)
export const setProgress = createAction<IDownloadProgress>(`${prefix}download-progress`)
export const setIsDownloading = createAction<boolean>(`${prefix}set-is-downloading`)
export const setIsUnzipping = createAction<boolean>(`${prefix}set-is-unzipping`)
export const setAlreadyShownAds = createAction<boolean>(`${prefix}set-already-shown-ads`)

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

    const zipPath = `${fs.dirs.CacheDir}/resources.zip`
    const { path } = await RNFetchBlob.config({
      fileCache: true,
      path: zipPath
    })
      .fetch(
        'POST',
        `${Config.BASE_URL}${Urls.downloadEvent}`,
        { 'Content-Type': 'application/json' },
        JSON.stringify({ id })
      )
      .progress((loaded, total) => {
        dispatch(setProgress({ loaded, total }))
      })
    dispatch(setProgress({ loaded: 1, total: 1 }))
    dispatch(setIsDownloading(false))
    dispatch(setIsUnzipping(true))

    const resPath = EventHelpers.resourcesPath
    const eventDataDirExists = await fs.exists(resPath)
    if (!eventDataDirExists) {
      await fs.mkdir(resPath)
    }

    await unzip(path(), resPath)

    const legacyString = await fs.readFile(`${resPath}textos.json`, 'utf8')
    const legacyEvent = JSON.parse(legacyString) as IFullOriginalEvent
    const selectedEvent = EventHelpers.legacyToFinalEvent(legacyEvent)
    dispatch(setIsUnzipping(false))
    dispatch(setSelectedEvent(selectedEvent))
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
