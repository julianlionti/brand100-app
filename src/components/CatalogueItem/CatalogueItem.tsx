import { Box, HStack, Icon, Image, Pressable, Text, View } from 'native-base'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ICatalogue } from '../../models/IFullEvent'

interface Props extends ICatalogue {
  onPress: () => void
}

const CatalogueItem: React.FC<Props> = (props) => {
  const { name, logo, onPress } = props
  return (
    <Pressable onPress={onPress}>
      <HStack alignItems={'center'} space={2} mr={4}>
        <Image
          alignItems={'center'}
          height={75}
          width={150}
          resizeMode="center"
          source={{ uri: logo }}
          alt={`Image from catalogue for brand ${name}`}
        />
        <Text color="darkText" flex={1}>
          {name}
        </Text>
        <Icon as={MaterialIcons} name={'chevron-right'} color={'gray.700'} />
      </HStack>
    </Pressable>
  )
}

export default CatalogueItem
