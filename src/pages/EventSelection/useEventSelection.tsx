import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useCallback, useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { getEvents } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import { IEvent } from '../../models/IEvent'
import { useEventsState } from '../../reducers/eventsReducer'
import { useLoadingState } from '../../reducers/loadingReducer'
import { NoEventStackParamList } from '../../routes/NoEventStack'
import { useT } from '../../translations'
import Urls from '../../utils/urls'

type NavigationProps = NativeStackNavigationProp<NoEventStackParamList, 'EventsSelection'>
const useEventSelection = () => {
  const navigation = useNavigation<NavigationProps>()
  const dispatch = useAppDispatch()
  const { events } = useEventsState()
  const { requests } = useLoadingState()
  const t = useT()

  const isLoading = requests.includes(Urls.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  const refreshEvents = useCallback(() => {
    dispatch(getEvents({ refresh: true }))
  }, [dispatch])

  const selectEvent = useCallback(
    (event: IEvent) => {
      navigation.navigate('DownloadEvent', { event })
    },
    [navigation]
  )

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return { t, events, isLoading, refreshEvents, selectEvent }
}

export default useEventSelection
