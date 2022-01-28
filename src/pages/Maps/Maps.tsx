import React from 'react'
import PageContainer from '../../components/PageContainer'
import useMaps from './useMaps'
import EventHeader from '../../components/EventHeader/EventHeader'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MapViewer from '../../components/MapViewer'

const Tab = createMaterialTopTabNavigator()

const Maps = () => {
  const { maps, tabBackgroundColor, tabIndicatorColor } = useMaps()
  return (
    <PageContainer>
      <EventHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarScrollEnabled: true,
          tabBarStyle: {
            backgroundColor: tabBackgroundColor
          },
          tabBarIndicatorStyle: { backgroundColor: tabIndicatorColor, height: 4 }
        }}
      >
        {maps.map((m) => (
          <Tab.Screen key={m.id.toString()} name={m.name}>
            {() => <MapViewer {...m} />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </PageContainer>
  )
}

export default Maps
