import { Heading, View, Image, Modal, VStack } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import Carousel from '../../components/Carousel/Carousel'
import EventHeader from '../../components/EventHeader/EventHeader'
import PageContainer from '../../components/PageContainer'
import useEventHome from './useEventHome'

const EventHome = () => {
  const { t, name, date, place, color, showAd, closeAd, ad, openAd } = useEventHome()
  console.log(ad, showAd)
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
      <Modal isOpen={showAd} onClose={closeAd}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <Pressable onPress={openAd}>
              <View>
                <Image width={'80%'} height={'80%'} alt={ad.link} source={{ uri: ad.image }} />
              </View>
            </Pressable>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </PageContainer>
  )
}

export default EventHome
