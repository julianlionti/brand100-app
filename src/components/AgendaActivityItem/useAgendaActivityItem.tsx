import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useCallback } from 'react'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { IAgendaActivity } from '../../models/IFullEvent'
import { GeneralAgendaStackParamList } from '../../routes/GeneralAgendaStack'
import { useT } from '../../translations'

type NavigationProps = StackNavigationProp<GeneralAgendaStackParamList>

const useAgendaActivityItem = (props: IAgendaActivity) => {
  const t = useT()
  const { color } = useSelectedEvent()
  const { details } = props
  const hasDetail = !!details.length
  const navigation = useNavigation<NavigationProps>()

  const openDetail = useCallback(() => {
    navigation.push('Detail', details)
  }, [navigation, details])

  return { ...props, color, t, hasDetail, openDetail }
}

export default useAgendaActivityItem
