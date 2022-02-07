import React from 'react'
import { Box, Divider, FlatList, View, VStack } from 'native-base'
import useDrawerContent from './useDrawerContent'
import DrawerListItem from '../DrawerListItem'
import { Text } from 'native-base'
import LogoBlanco from '../../assets/images/logo-blanco.png'
import styled from '@emotion/native'
import { SafeAreaView } from 'react-native'

const LogoImage = styled.Image`
  height: 80px;
  width: 120px;
`

const Drawer: React.FC = () => {
  const { menuOptions, t, address, contact, socialNetworks, selected } = useDrawerContent()
  return (
    <SafeAreaView>
    <View bgColor={'gray.500'} height={'full'}>
      <View bgColor={'white'}>
        <FlatList
          keyExtractor={(item) => item.title}
          // ItemSeparatorComponent={() => <Divider />}
          data={menuOptions}
          renderItem={({ item }) => (
            <DrawerListItem selected={selected === item.screen} {...item} />
          )}
        />
      </View>
      <Divider />
      <VStack space="1" pt="1" mx="1">
        <Text>{t('menu.organize')}</Text>
        <VStack alignItems={'center'}>
          <Box py="1">
            <LogoImage source={LogoBlanco} resizeMode="center" />
          </Box>
          <Text textAlign="center">{address}</Text>
          <Text textAlign="center">{contact}</Text>
          <Text textAlign="center">{socialNetworks}</Text>
        </VStack>
      </VStack>
    </View>
    </SafeAreaView>
  )
}

export default Drawer
