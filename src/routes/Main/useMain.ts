import { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging'
import Notifications from '../../utils/notifications'
import EventHelpers from '../../utils/eventHelper'
import Config from '../../utils/Config'
import { useEventsState } from '../../reducers/eventsReducer'
import { useAppDispatch } from '../../hooks/redux'
import { setNotification } from '../../actions/userActions'
import moment from 'moment'
import 'moment-timezone'

const useMain = () => {
  const { selectedEvent, hasToUpdate } = useEventsState()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const { data, sentTime, messageId, notification } = remoteMessage
      const { body, title } = notification as any
      const { titulo, mensaje } = data as any
      if (!messageId) return
      if (!selectedEvent) return

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
        color: selectedEvent.color,
        largeIcon: selectedEvent.logo
      })
    })

    return unsubscribe
  }, [dispatch, selectedEvent])

  return { selectedEvent, hasToUpdate }
}

export default useMain
