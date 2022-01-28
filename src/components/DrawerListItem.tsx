import React from 'react'
import { IMenu } from './DrawerContent/useDrawerContent'
import { HStack, Icon, IconButton, Pressable, Text, useContrastText } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const DrawerListItem: React.FC<IMenu> = (props) => {
  const { onPress, title, icon } = props
  const color = useContrastText('white')
  return (
    <Pressable onPress={onPress}>
      <HStack space="2" alignItems={'center'} mx="2">
        <Icon as={MaterialIcons} name={icon} color={'gray.700'} />
        <Text py="1" color={color} flex={1}>
          {title}
        </Text>
        <IconButton>
          <Icon onPress={onPress} as={MaterialIcons} name={'chevron-right'} color={'gray.700'} />
        </IconButton>
      </HStack>
    </Pressable>
  )
}

export default DrawerListItem
