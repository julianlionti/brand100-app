import React from 'react'
import { FlatList, View } from 'react-native'
import useDrawerContent from './useDrawerContent'
import DrawerListItem from '../DrawerListItem'
import { Text } from 'native-base'

const Drawer: React.FC = () => {
  const { menu } = useDrawerContent()
  return (
    <View>
      <Text>Drawer 2</Text>
      <Text>Drawer</Text>
      <FlatList data={menu} renderItem={({ item }) => <DrawerListItem {...item} />} />
    </View>
  )
}

export default Drawer
