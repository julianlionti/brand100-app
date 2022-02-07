import { createReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import { PersistConfig } from 'redux-persist/es/types'
import { useAppSelector } from '../hooks/redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  cleanAllNotifications,
  cleanError,
  clearPermissions,
  getUserAgenda,
  login,
  logout,
  notificationPermission,
  setNotification
} from '../actions/userActions'
import { IOnlineAgenda } from '../models/IOnlineAgenda'
import { INotification } from '../models/INotification'
import { Platform } from 'react-native'

export interface UserState {
  username: string
  password: string
  errorLogin: string
  agenda: IOnlineAgenda[]
  notifications: INotification[]
  hasToAskForNotificationPermission: boolean | null
}

const initialState: UserState = {
  username: '',
  password: '',
  errorLogin: '',
  agenda: [],
  notifications: [],
  hasToAskForNotificationPermission: null
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(login, (_, action) => ({
    ...initialState,
    username: action.payload.username.trim(),
    password: action.payload.password.trim()
  }))
  builder.addCase(logout, () => initialState)
  builder.addCase(cleanError, (state) => {
    state.errorLogin = ''
  })
  builder.addCase(getUserAgenda.fulfilled, (state, action) => {
    state.agenda = action.payload
    state.errorLogin = ''
  })
  builder.addCase(getUserAgenda.rejected, (state, action) => {
    state.errorLogin = action.payload as string
    state.username = ''
    state.password = ''
  })
  builder.addCase(setNotification, (state, action) => {
    if (state.notifications.some((noti) => noti.id === action.payload.id)) {
      state.notifications = state.notifications.filter((noti) => noti.id !== action.payload.id)
    } else {
      state.notifications.push(action.payload)
    }
  })
  builder.addCase(cleanAllNotifications, (state) => {
    state.notifications = []
  })
  builder.addCase(notificationPermission.fulfilled, (state, { payload }) => {
    state.hasToAskForNotificationPermission = payload
  })
  builder.addCase(clearPermissions, (state) => {
    state.hasToAskForNotificationPermission = null
  })
})

const persistConfig: PersistConfig<UserState> = {
  key: 'user',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['username', 'password', 'notifications', 'hasNotificationPermission']
}
const userReducer = persistReducer(persistConfig, reducer)

export const useUserState = () => useAppSelector(({ userReducer }) => userReducer)
export default userReducer
