import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useEventsState } from '../reducers/eventsReducer'
import NoEventStack from './NoEventStack'
import EventDrawer from './EventDrawer'

const Main = () => {
  const { selectedEvent, hasToUpdate } = useEventsState()
  return (
    <NavigationContainer>
      {(!selectedEvent || hasToUpdate) && <NoEventStack />}
      {selectedEvent && !hasToUpdate && <EventDrawer />}
    </NavigationContainer>
  )
}

export default Main
