import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { IEvent } from '../models/IEvent'
import DownloadEvent from '../pages/DownloadEvent/DownloadEvent'
import EventsSelection from '../pages/EventSelection/EventsSelection'

export type NoEventStackParamList = {
  EventsSelection: undefined
  DownloadEvent: { event: IEvent }
}

const Stack = createStackNavigator<NoEventStackParamList>()
const NoEventStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EventsSelection" component={EventsSelection} />
      <Stack.Screen name="DownloadEvent" component={DownloadEvent} />
    </Stack.Navigator>
  )
}

export default NoEventStack
