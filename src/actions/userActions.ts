import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { LoginState } from '../components/OnlineAgendaLogin/useOnlineAgendaLogin'
import { INotification } from '../models/INotification'
import { IOnlineAgenda } from '../models/IOnlineAgenda'
import { IOriginalOnlineAgenda } from '../models/IOriginalOnlineAgenda'
import { RootState } from '../store/store'
import Config from '../utils/Config'
import EventHelpers from '../utils/eventHelper'
import { makeRequest } from '../utils/makeRequest'
import messaging from '@react-native-firebase/messaging'

const prefix = `user/`

export const login = createAction<LoginState>(`${prefix}login`)
export const logout = createAction(`${prefix}logout`)
export const cleanError = createAction(`${prefix}clean-error`)
export const setNotification = createAction<INotification>(`${prefix}set-notification`)
export const cleanAllNotifications = createAction(`${prefix}clean-all-notifications`)
export const clearPermissions = createAction(`${prefix}clear-permissions`)

type GetUserAgendaProps = { refresh?: boolean } | undefined
export const getUserAgenda = createAsyncThunk<IOnlineAgenda[], GetUserAgendaProps>(
  `${prefix}get-user-agenda`,
  async (props, { getState, rejectWithValue }) => {
    const { refresh } = props || {}
    const { eventsReducer, userReducer } = getState() as RootState
    const { selectedEvent } = eventsReducer
    const { agenda, password, username } = userReducer
    if (agenda.length > 0 && !refresh) return agenda

    if (!selectedEvent) throw Error('No selected event')
    const { eventUrl } = selectedEvent
    // const eventUrl = oneToOneAgendaUrl.substring(0, oneToOneAgendaUrl.indexOf('/agenda'))
    const finalUrl = `${eventUrl}${Config.AGENDA_SUFFIX}`
    const response = await makeRequest({
      baseURL: '',
      url: finalUrl,
      params: { pPass: password, pUser: username }
    })
    if (response.Retorno && response.Modulos.length === 0) {
      return rejectWithValue(response.Retorno)
    }
    const modules = response.Modulos as IOriginalOnlineAgenda[]
    return modules.map(EventHelpers.legacyToFinalAgenda)
  }
)

export const notificationPermission = createAsyncThunk<boolean>(
  `${prefix}-notification-permission`,
  async (_, { getState }) => {
    const { userReducer } = getState() as RootState
    const { hasToAskForNotificationPermission } = userReducer
    if (hasToAskForNotificationPermission === false) return false

    const authorizationStatus = await messaging().requestPermission()
    console.log('Permission status:', authorizationStatus)
    if (
      authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      return false
    } else {
      return true
    }
  }
)
