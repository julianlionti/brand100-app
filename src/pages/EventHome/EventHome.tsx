import { Heading, VStack, ScrollView } from 'native-base'
import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import EventHeader from '../../components/EventHeader/EventHeader'
import HasToUpdate from '../../components/HasToUpdate/HasToUpdate'
import PageContainer from '../../components/PageContainer'
import useEventHome from './useEventHome'
import Sponsor from '../../components/Sponsor/Sponsor'
import normalize from 'react-native-normalize'

const EventHome = () => {
  const { information, date, place, color } = useEventHome()

  return (
    <PageContainer>
      <EventHeader />
      <ScrollView>
        <Sponsor />
        <HasToUpdate />
        <VStack py={'2'}>
          <VStack alignItems={'center'} pb="3" px="2" space={'2'}>
            <Heading textAlign={'center'}>{date}</Heading>
            <Heading textAlign={'center'} size={'sm'}>
              {place}
            </Heading>
          </VStack>
          <Carousel />
          <VStack alignItems="center" p="3" bgColor={color} minHeight={normalize(60, 'height')}>
            <Heading textAlign="center" size="md">
              {information}
            </Heading>
            {/* <Heading size="sm">{name}</Heading> */}
          </VStack>
        </VStack>
      </ScrollView>
    </PageContainer>
  )
}

export default EventHome
