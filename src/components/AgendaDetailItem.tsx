import React from 'react'
import { View, Box, Heading, Image, Text, VStack } from 'native-base'
import { IActivityDetail } from '../models/IFullEvent'
import { parseHtml } from '../utils/textUtils'

const AgendaDetailItem: React.FC<IActivityDetail> = (props) => {
  const { title, images, description } = props
  return (
    <Box m="1" shadow={1} rounded="xs">
      <VStack p="4">
        <Heading textAlign={'center'} color={'darkText'}>
          {title}
        </Heading>
        <View bgColor={'primary.800'} height={0.5} mx={2} my={1} />
        {images.map((img, i) => (
          <Image
            height={250}
            key={img}
            my="1"
            resizeMode="cover"
            source={{ uri: img }}
            alt={`Image from ${title} number ${i}`}
          />
        ))}
        <Text py="2" color={'darkText'}>
          {parseHtml(description)}
        </Text>
      </VStack>
    </Box>
  )
}

export default AgendaDetailItem
