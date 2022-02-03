import { createReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import { PersistConfig } from 'redux-persist/es/types'
import { useAppSelector } from '../hooks/redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { cleanError, getUserAgenda, login, logout } from '../actions/userActions'
import { IOnlineAgenda } from '../models/IOnlineAgenda'

export interface UserState {
  username: string
  password: string
  agenda: IOnlineAgenda[]
  errorLogin: string
}

const initialState: UserState = {
  username: '',
  password: '',
  agenda: [],
  errorLogin: ''
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
    state.agenda = []
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
