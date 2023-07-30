import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import moment from 'moment'
import 'moment-timezone'
import { setNotification } from '../actions/userActions'
import { store } from '../store/store'
// import { store } from '../store/store'
import Config from '../utils/Config'
import EventHelpers from '../utils/eventHelper'
import { injectStore } from '../utils/makeRequest'
import Notifications from '../utils/notifications'

export const backgroundMessageHandler = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage
) => {
  try {
    const { data, sentTime, messageId, notification } = remoteMessage
    const { body, title } = notification as any
    const { titulo, mensaje } = data as any
    if (!messageId) return
    const { dispatch, getState } = store
    const { eventsReducer } = getState()
    const { selectedEvent } = eventsReducer
    if (!selectedEvent) return
    const { color, logo } = selectedEvent

    dispatch(
      setNotification({
        title: titulo || title,
        message: mensaje || body,
        id: messageId,
        date: moment(sentTime).tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm')
      })
    )
    Notifications.displayNotification({
      title: titulo,
      body: mensaje,
      color: color,
      largeIcon: logo
    })
  } catch (err) {
    console.log(err)
  }
}
