import { createReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import { PersistConfig } from 'redux-persist/es/types'
import { useAppSelector } from '../hooks/redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  cleanAllNotifications,
  cleanError,
  getUserAgenda,
  login,
  logout,
  setNotification
} from '../actions/userActions'
import { IOnlineAgenda } from '../models/IOnlineAgenda'
import { INotification } from '../models/INotification'

export interface UserState {
  username: string
  password: string
  errorLogin: string
  agenda: IOnlineAgenda[]
  notifications: INotification[]
}

const initialState: UserState = {
  username: '',
  password: '',
  errorLogin: '',
  agenda: [],
  notifications: [
    {
      title: 'Bienvenida',
      date: '20/01/2022',
      id: 23984298,
      message: 'Bienvenidos a Brand 100. Vamos la academia!'
    },
    {
      title: 'Otra cosa',
      date: '22/01/2022',
      id: 2398232298,
      message: 'a kdlsa ñlsak dñlask dñlask dñlask dasdlsajdaksldja lkaslkj laks dlaks aljks d'
    },
    {
      title: 'Tercera',
      date: '28/01/2022',
      id: 2398422328,
      message: 'sad ad adaskd asñlk ñas kdlañk dasñd añdad kañld kañ dkña sñl!'
    }
  ]
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
      state.notifications.filter((noti) => noti.id !== action.payload.id)
    } else {
      state.notifications.push(action.payload)
    }
  })
  builder.addCase(cleanAllNotifications, (state) => {
    state.notifications = []
  })
})

const persistConfig: PersistConfig<UserState> = {
  key: 'user',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['username', 'password']
}
const userReducer = persistReducer(persistConfig, reducer)

export const useUserState = () => useAppSelector(({ userReducer }) => userReducer)
export default userReducer
