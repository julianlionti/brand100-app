import { Heading, VStack } from 'native-base'
import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import EventHeader from '../../components/EventHeader/EventHeader'
import PageContainer from '../../components/PageContainer'
import useEventHome from './useEventHome'

const EventHome = () => {
  const { t, name, date, place, color } = useEventHome()
  return (
    <PageContainer>
      <EventHeader />
      <VStack py={'2'}>
        <VStack alignItems={'center'} pb="2" space={'2'}>
          <Heading>{date}</Heading>
          <Heading size={'sm'}>{place}</Heading>
        </VStack>
        <Carousel />
        <VStack alignItems={'center'} py="3" bgColor={color}>
          <Heading size="sm">{t('event.home.welcome')}</Heading>
          <Heading size="sm">{name}</Heading>
        </VStack>
      </VStack>
    </PageContainer>
  )
}

export default EventHome
