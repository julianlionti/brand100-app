import { useNavigation } from '@react-navigation/native'
import { useCallback, useMemo } from 'react'
import { setAgendaItemFavorite } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useEventsState } from '../../reducers/eventsReducer'
import { useT } from '../../translations'
import { AgendaActivityItemProps } from './AgendaActivityItem'

const useAgendaActivityItem = (props: AgendaActivityItemProps) => {
  const t = useT()
  const dispatch = useAppDispatch()
  const { color } = useSelectedEvent()
  const { favoriteAgenda } = useEventsState()
  const { details, idActivity, isFromFav } = props
  const hasDetail = !!details.length
  const navigation = useNavigation<any>()

  const openDetail = useCallback(() => {
    if (isFromFav) {
      navigation.push('AgendaDetail', details)
    } else {
      navigation.push('Detail', details)
    }
  }, [navigation, details, isFromFav])

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
