import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useEventsState } from '../reducers/eventsReducer'
import NoEventStack from './NoEventStack'
import EventDrawer from './EventDrawer'

const Main = () => {
  const { selectedEvent } = useEventsState()
  return (
    <NavigationContainer>
      {!selectedEvent && <NoEventStack />}
      {selectedEvent && <EventDrawer />}
    </NavigationContainer>
  )
}

export default Main
