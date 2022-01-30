import React, { lazy, Suspense } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../components/DrawerContent/DrawerContent'
import Loading from '../components/Loading'
import EventHeader from '../components/EventHeader/EventHeader'

const EventHome = lazy(() => import('../pages/EventHome/EventHome'))
const Welcome = lazy(() => import('../pages/Welcome/Welcome'))
const Maps = lazy(() => import('../pages/Maps/Maps'))
const GeneralAgendaStack = lazy(() => import('./GeneralAgendaStack'))
const Featured = lazy(() => import('../pages/Featured/Featured'))
const CatalogueStack = lazy(() => import('./CatalogueStack'))
const OneToOneAgendaStack = lazy(() => import('./OneToOneAgendaStack'))

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

const WithSuspense: React.FC = ({ children }) => {
  return (
    <Suspense fallback={<Loading full Header={<EventHeader loading />} />}>{children}</Suspense>
  )
}

const Drawer = createDrawerNavigator<EventDrawerParamList>()
const EventDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{ headerShown: false, lazy: true }}
    >
      <Drawer.Screen name="Home">
        {() => (
          <WithSuspense>
            <EventHome />
          </WithSuspense>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Welcome">
        {() => (
          <WithSuspense>
            <Welcome />
          </WithSuspense>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Maps">
        {() => (
          <WithSuspense>
            <Maps />
          </WithSuspense>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="GeneralAgenda">
        {() => (
          <WithSuspense>
            <GeneralAgendaStack />
          </WithSuspense>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="OneToOneAgenda">
        {() => (
          <WithSuspense>
            <OneToOneAgendaStack />
          </WithSuspense>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Featured">
        {() => (
          <WithSuspense>
            <Featured />
          </WithSuspense>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Catalogue">
        {() => (
          <WithSuspense>
            <CatalogueStack />
          </WithSuspense>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default EventDrawer
