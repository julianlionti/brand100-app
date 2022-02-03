import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'native-base'
import { useState } from 'react'
import { cleanSelectedEvent } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { EventDrawerParamList } from '../../routes/EventDrawer'
import { useT } from '../../translations'

type NavigationProps = DrawerNavigationProp<EventDrawerParamList>

const useEventHeader = () => {
  const [changeEventConfirmation, setChangeEventConfirmation] = useState(false)
  const dispatch = useAppDispatch()
  const { colors } = useTheme()
  const { openDrawer, goBack, navigate } = useNavigation<any>()
  const { logo } = useSelectedEvent()
  const t = useT()

  const cleanEvent = () => {
    dispatch(cleanSelectedEvent())
    toggleEventConfirmation()
  }

  const goToLogin = () => {
    navigate('OneToOneAgenda', {
      screen: 'Tabs',
      params: {
        screen: 'onetoone.online_access'
      }
    })
  }

  const toggleEventConfirmation = () => setChangeEventConfirmation((e) => !e)

  return {
    t,
    colors,
    openDrawer,
    logoUrl: logo,
    cleanEvent,
    goBack,
    toggleEventConfirmation,
    changeEventConfirmation,
    goToLogin
  }
}
export default useEventHeader
