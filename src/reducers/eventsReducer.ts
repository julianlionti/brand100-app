import { createReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import { PersistConfig } from 'redux-persist/es/types'
import {
  setProgress,
  getEvents,
  setIsDownloading,
  setIsUnzipping,
  setAlreadyShownAds,
  setAgendaItemFavorite,
  setCatelogueItemFavorite,
  checkForUpdates,
  downloadEvent,
  cleanSelectedEvent,
  setHasToUpdate
} from '../actions/eventsActions'
import { useAppSelector } from '../hooks/redux'
import { IEvent } from '../models/IEvent'
import { IAgendaActivity, ICatalogue, IFullEvent } from '../models/IFullEvent'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type IDownloadProgress = { loaded: number; total: number }

interface EventsState {
  events: IEvent[]
  progress: IDownloadProgress
  isDownloading: boolean
  isUnzipping: boolean
  alreadyShownAds: boolean
  selectedEvent: IFullEvent | null
  favoriteAgenda: IAgendaActivity[]
  favoriteCatalogue: ICatalogue[]
  hasToUpdate: boolean
  showHasToUpdate: boolean
}

const initialState: EventsState = {
  events: [],
  selectedEvent: null,
  progress: { loaded: 0, total: 0 },
  isDownloading: false,
  isUnzipping: false,
  alreadyShownAds: false,
  favoriteAgenda: [],
  favoriteCatalogue: [],
  hasToUpdate: false,
  showHasToUpdate: false
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getEvents.pending, (state) => {
    state.events = []
  })
  builder.addCase(getEvents.fulfilled, (state, action) => {
    state.events = action.payload
  })
  builder.addCase(downloadEvent.fulfilled, (state, action) => {
    state.selectedEvent = action.payload
    state.hasToUpdate = false
    state.showHasToUpdate = false
  })
  builder.addCase(setProgress, (state, action) => {
    state.progress = action.payload
  })
  builder.addCase(setIsDownloading, (state, action) => {
    state.isDownloading = action.payload
  })
  builder.addCase(setIsUnzipping, (state, action) => {
    state.isUnzipping = action.payload
  })
  builder.addCase(cleanSelectedEvent.fulfilled, (state) => {
    state.selectedEvent = null
  })
  builder.addCase(setAlreadyShownAds, (state, action) => {
    state.alreadyShownAds = action.payload
  })
  builder.addCase(setAgendaItemFavorite, (state, action) => {
    const { idActivity } = action.payload
    const index = state.favoriteAgenda.find((e) => e.idActivity === idActivity)
    if (index) {
      state.favoriteAgenda = state.favoriteAgenda.filter((e) => e.idActivity !== idActivity)
    } else {
      state.favoriteAgenda.push(action.payload)
    }
  })
  builder.addCase(setCatelogueItemFavorite, (state, action) => {
    const { idCatalogue } = action.payload
    const index = state.favoriteCatalogue.find((e) => e.idCatalogue === idCatalogue)
    if (index) {
      state.favoriteCatalogue = state.favoriteCatalogue.filter((e) => e.idCatalogue !== idCatalogue)
    } else {
      state.favoriteCatalogue.push(action.payload)
    }
  })
  builder.addCase(checkForUpdates.fulfilled, (state, action) => {
    state.showHasToUpdate = action.payload
  })
  builder.addCase(setHasToUpdate, (state, action) => {
    state.hasToUpdate = action.payload
  })
})

const persistConfig: PersistConfig<EventsState> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['selectedEvent', 'favoriteAgenda', 'favoriteCatalogue']
}
const eventsReducer = persistReducer(persistConfig, reducer)

export const useEventsState = () => useAppSelector(({ eventsReducer }) => eventsReducer)
export default eventsReducer
