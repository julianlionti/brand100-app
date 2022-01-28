import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { useMemo } from 'react'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { EventDrawerParamList } from '../../routes/EventDrawer'
import { Translations, useT } from '../../translations'

type NavigationProps = DrawerNavigationProp<EventDrawerParamList>
type Screens = keyof EventDrawerParamList
export type IMenu = { title: string; icon: string; onPress: () => void }

const useDrawerContent = () => {
  const t = useT()
  const navigator = useNavigation<NavigationProps>()
  const { menu } = useSelectedEvent()
  const { address, contact, socialNetworks } = menu

  const menuOptions = useMemo<IMenu[]>(() => {
    const createMenuItem = (tkey: Translations, icon: string, screen: Screens) => ({
      icon,
      title: t(tkey) as string,
      onPress: () => {
        navigator.navigate(screen)
      }
    })

    return [
      createMenuItem('menu.home', 'home', 'Home'),
      createMenuItem('menu.welcome', 'info', 'Welcome'),
      createMenuItem('menu.maps', 'place', 'Maps'),
      createMenuItem('menu.general_agenda', 'calendar-today', 'GeneralAgenda'),
      createMenuItem('menu.online_agenda', 'web', 'OnlineAgenda'),
      createMenuItem('menu.one_to_one_agenda', 'person-pin', 'OneToOneAgenda'),
      createMenuItem('menu.featured', 'featured-play-list', 'Featured'),
      createMenuItem('menu.catalogue', 'local-library', 'Catalogue'),
      createMenuItem('menu.notifications', 'notifications', 'Notifications')
    ]
  }, [navigator, t])

  return { t, menuOptions, address, contact, socialNetworks }
}

export default useDrawerContent
