import { createReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import { PersistConfig } from 'redux-persist/es/types'
import { useAppSelector } from '../hooks/redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUserAgenda, login, logout } from '../actions/userActions'
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
  builder.addCase(login, (_, action) => ({ ...initialState, ...action.payload }))
  builder.addCase(logout, () => initialState)
  builder.addCase(getUserAgenda.fulfilled, (state, action) => {
    state.agenda = action.payload
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
