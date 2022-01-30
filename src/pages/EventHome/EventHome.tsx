import { Heading, Image, Modal, VStack, Pressable, Button, ScrollView } from 'native-base'
import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import EventHeader from '../../components/EventHeader/EventHeader'
import HasToUpdate from '../../components/HasToUpdate/HasToUpdate'
import PageContainer from '../../components/PageContainer'
import useEventHome from './useEventHome'

const EventHome = () => {
  const { t, name, date, place, color, showAd, closeAd, ad, openAd } = useEventHome()

  return (
    <PageContainer>
      <EventHeader />
      <ScrollView>
        <HasToUpdate />
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
      </ScrollView>
      <Modal isOpen={showAd} onClose={closeAd}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Body>
            <Pressable position={'relative'} onPress={openAd}>
              <Image
                width={350}
                height={500}
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
    </PageContainer>
  )
}

export default EventHome
