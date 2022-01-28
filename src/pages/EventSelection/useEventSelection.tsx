import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useCallback, useEffect } from 'react'
import { getEvents } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import { IEvent } from '../../models/IEvent'
import { useEventsState } from '../../reducers/eventsReducer'
import { useLoadingState } from '../../reducers/loadingReducer'
import { NoEventStackParamList } from '../../routes/NoEventStack'
import { useT } from '../../translations'

type NavigationProps = NativeStackNavigationProp<NoEventStackParamList, 'EventsSelection'>
const useEventSelection = () => {
  const navigation = useNavigation<NavigationProps>()
  const dispatch = useAppDispatch()
  const { events } = useEventsState()
  const { requests } = useLoadingState()
  const t = useT()

  const isLoading = requests.includes('a')

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

  return { t, events, isLoading, refreshEvents, selectEvent }
}

export default useEventSelection
