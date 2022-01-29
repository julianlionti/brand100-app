import { createReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import { PersistConfig } from 'redux-persist/es/types'
import {
  clearEvent,
  setProgress,
  getEvents,
  setIsDownloading,
  setIsUnzipping,
  setSelectedEvent,
  setAlreadyShownAds
} from '../actions/eventsActions'
import { useAppSelector } from '../hooks/redux'
import { IEvent } from '../models/IEvent'
import { IFullEvent } from '../models/IFullEvent'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type IDownloadProgress = { loaded: number; total: number }

interface EventsState {
  events: IEvent[]
  selectedEvent: IFullEvent | null
  progress: IDownloadProgress
  isDownloading: boolean
  isUnzipping: boolean
  alreadyShownAds: boolean
}

const initialState: EventsState = {
  events: [],
  selectedEvent: null,
  progress: { loaded: 0, total: 0 },
  isDownloading: false,
  isUnzipping: false,
  alreadyShownAds: false
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedEvent, (state, action) => {
    state.selectedEvent = action.payload
  })
  builder.addCase(clearEvent, (state) => {
    state.selectedEvent = null
  })
  builder.addCase(getEvents.pending, (state) => {
    state.events = []
  })
  builder.addCase(getEvents.fulfilled, (state, action) => {
    state.events = action.payload
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
  builder.addCase(setAlreadyShownAds, (state, action) => {
    state.alreadyShownAds = action.payload
  })
})

const persistConfig: PersistConfig<EventsState> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['selectedEvent']
}
const eventsReducer = persistReducer(persistConfig, reducer)

export const useEventsState = () => useAppSelector(({ eventsReducer }) => eventsReducer)
export default eventsReducer
