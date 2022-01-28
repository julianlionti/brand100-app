import { Heading, Text, VStack } from 'native-base'
import React from 'react'
import EventHeader from '../../components/EventHeader/EventHeader'
import PageContainer from '../../components/PageContainer'
import useEventHome from './useEventHome'

const EventHome = () => {
  const { selectedEvent } = useEventHome()
  return (
    <PageContainer>
      <EventHeader />
      <VStack py={'3'}>
        <Heading textAlign={'center'}>{selectedEvent.date}</Heading>
        <Heading size={'sm'} textAlign={'center'}>
          {selectedEvent.place}
        </Heading>
        <Text>{selectedEvent.name}</Text>
        <Text>{selectedEvent.name}</Text>
        <Text>{selectedEvent.name}</Text>
      </VStack>
    </PageContainer>
  )
}

export default EventHome
