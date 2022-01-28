import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import EventHome from '../pages/EventHome/EventHome'
import DrawerContent from '../components/DrawerContent/DrawerContent'

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
    </Drawer.Navigator>
  )
}

export default EventDrawer
