import React from 'react'
import { Image, Text, VStack } from 'native-base'
import { IAgendaSponsor } from '../../models/IFullEvent'

const AgendaSponsorItem: React.FC<IAgendaSponsor> = (props) => {
  const { image, name } = props
  return (
    <VStack space={'2'}>
      <Text color={'darkText'}>{name}</Text>
      <Image height={150} source={{ uri: image }} resizeMode="center" alt={`Image from ${name}`} />
    </VStack>
  )
}

export default AgendaSponsorItem
