import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'native-base'
import { cleanSelectedEvent } from '../../actions/eventsActions'
import { useAppDispatch } from '../../hooks/redux'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { EventDrawerParamList } from '../../routes/EventDrawer'
import { useT } from '../../translations'

type NavigationProps = DrawerNavigationProp<EventDrawerParamList>

const useEventHeader = () => {
  const dispatch = useAppDispatch()
  const { colors } = useTheme()
  const { openDrawer, goBack } = useNavigation<NavigationProps>()
  const { logo } = useSelectedEvent()
  const t = useT()

  const cleanEvent = () => {
    dispatch(cleanSelectedEvent())
  }

  return { t, colors, openDrawer, logoUrl: logo, cleanEvent, goBack }
}
export default useEventHeader
