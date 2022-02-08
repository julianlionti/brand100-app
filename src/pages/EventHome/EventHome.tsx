import { Heading, Image, Modal, VStack, Pressable, Button, ScrollView } from 'native-base'
import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import EventHeader from '../../components/EventHeader/EventHeader'
import HasToUpdate from '../../components/HasToUpdate/HasToUpdate'
import PageContainer from '../../components/PageContainer'
import useEventHome from './useEventHome'
import normalize from 'react-native-normalize'

const EventHome = () => {
  const { t, name, date, place, color, showAd, closeAd, ad, openAd } = useEventHome()

  return (
    <PageContainer>
      <EventHeader />
      <ScrollView>
        <HasToUpdate />
        <VStack py={'2'}>
          <VStack alignItems={'center'} pb="3" px="2" space={'2'}>
            <Heading textAlign={'center'}>{date}</Heading>
            <Heading textAlign={'center'} size={'sm'}>
              {place}
            </Heading>
          </VStack>
          <Carousel />
          <VStack alignItems={'center'} p="3" bgColor={color}>
            <Heading size="sm">{t('event.home.welcome')}</Heading>
            <Heading size="sm">{name}</Heading>
          </VStack>
        </VStack>
      </ScrollView>
      {ad && (
        <Modal isOpen={showAd} onClose={closeAd}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Body>
              <Pressable position={'relative'} onPress={openAd}>
                <Image
                  width={350}
                  height={normalize(500, 'height')}
                  resizeMode="cover"
                  alt={ad.link}
                  source={{ uri: ad.image }}
                />
                <Button
                  variant="link"
                  color={'primary.900'}
                  onPress={openAd}
                  position="absolute"
                  right={4}
                  bottom={4}
                >
                  {t('home.ads_see_more')?.toUpperCase()}
                </Button>
              </Pressable>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      )}
    </PageContainer>
  )
}

export default EventHome
