import React from 'react'
import { Box, Heading, Image, ScrollView, Text, View, VStack } from 'native-base'
import PageContainer from '../../components/PageContainer'
import EventHeader from '../../components/EventHeader/EventHeader'
import useWelcome from './useWelcome'
import { parseHtml } from '../../utils/textUtils'
import HasToUpdate from '../../components/HasToUpdate/HasToUpdate'

const Welcome = () => {
  const { title, welcome, hasImage, image } = useWelcome()
  return (
    <PageContainer>
      <EventHeader />
      <HasToUpdate />

      <ScrollView>
        <VStack space="2">
          {hasImage && (
            <Box p="8" width={'full'} height={350}>
              <Image
                alt="WelcomeImage"
                height={'full'}
                resizeMode="cover"
                source={{ uri: image }}
              />
            </Box>
          )}
          {title && <Heading textAlign={'center'}>{title}</Heading>}
          <Text p="4">{parseHtml(welcome)}</Text>
        </VStack>
      </ScrollView>
    </PageContainer>
  )
}

export default Welcome
