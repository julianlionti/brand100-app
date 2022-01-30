import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useCallback, useMemo } from 'react'
import { setAgendaItemFavorite } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useEventsState } from '../../reducers/eventsReducer'
import { GeneralAgendaStackParamList } from '../../routes/GeneralAgendaStack'
import { useT } from '../../translations'
import { AgendaActivityItemProps } from './AgendaActivityItem'

type NavigationProps = StackNavigationProp<GeneralAgendaStackParamList>

const useAgendaActivityItem = (props: AgendaActivityItemProps) => {
  const t = useT()
  const dispatch = useAppDispatch()
  const { color } = useSelectedEvent()
  const { favoriteAgenda } = useEventsState()
  const { details, idActivity } = props
  const hasDetail = !!details.length
  const navigation = useNavigation<NavigationProps>()

  const openDetail = useCallback(() => {
    navigation.push('Detail', details)
  }, [navigation, details])

  const setFavorite = useCallback(() => {
    dispatch(setAgendaItemFavorite(props))
  }, [dispatch, props])

  const isFavorite = useMemo(
    () => favoriteAgenda.some((fa) => fa.idActivity === idActivity),
    [favoriteAgenda, idActivity]
  )

  return { ...props, color, t, hasDetail, openDetail, setFavorite, isFavorite }
}

export default useAgendaActivityItem
