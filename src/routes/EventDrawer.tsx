import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import EventHome from '../pages/EventHome/EventHome'
import DrawerContent from '../components/DrawerContent/DrawerContent'
import Welcome from '../pages/Welcome/Welcome'
import Maps from '../pages/Maps/Maps'
import GeneralAgendaStack from './GeneralAgendaStack'
import Featured from '../pages/Featured/Featured'
import CatalogueStack from './CatalogueStack'

export type EventDrawerParamList = {
  Home: undefined
  Welcome: undefined
  Maps: undefined
  GeneralAgenda: undefined
  OneToOneAgenda: undefined
  OnlineAgenda: undefined
  Featured: undefined
  Catalogue: undefined
  Notifications: undefined
}

const Drawer = createDrawerNavigator<EventDrawerParamList>()
const EventDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={EventHome} />
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Maps" component={Maps} />
      <Drawer.Screen name="GeneralAgenda" component={GeneralAgendaStack} />
      <Drawer.Screen name="Featured" component={Featured} />
      <Drawer.Screen name="Catalogue" component={CatalogueStack} />
    </Drawer.Navigator>
  )
}

export default EventDrawer
