import styled from '@emotion/native'
import {
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  Menu,
  Pressable,
  StatusBar,
  View
} from 'native-base'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import useEventHeader from './useEventHeader'

const EventImage = styled.Image`
  height: 90px;
  margin: 10px;
  width: 90%;
`

interface Props {
  canGoBack?: boolean
}

const EventHeader: React.FC<Props> = (props) => {
  const { canGoBack } = props
  const { t, colors, logoUrl, cleanEvent, openDrawer, goBack } = useEventHeader()
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[800]} />
      <Box safeAreaTop bg={colors.gray[400]} />
      <HStack bg="gray.700" px="1" justifyContent="space-between" alignItems="center">
        <HStack alignItems="center">
          <IconButton
            onPress={canGoBack ? goBack : openDrawer}
            icon={
              <Icon
                size="sm"
                as={MaterialIcons}
                name={canGoBack ? 'arrow-back' : 'menu'}
                color="white"
              />
            }
          />
          <View flex={1} alignItems={'center'} background={'transparent'}>
            <EventImage resizeMode="contain" source={{ uri: logoUrl }} />
          </View>
          {!canGoBack && (
            <Menu
              trigger={(triggerProps) => (
                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                  <Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />
                </Pressable>
              )}
            >
              <Menu.Item onPress={cleanEvent}>{t('header.change_event') as string}</Menu.Item>
              <Menu.Item>{t('header.login') as string}</Menu.Item>
            </Menu>
          )}
        </HStack>
      </HStack>
      <Divider />
    </>
  )
}

export default EventHeader
