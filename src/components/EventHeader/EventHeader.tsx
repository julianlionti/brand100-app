import styled from '@emotion/native'
import { Box, Divider, HStack, IconButton, Menu, Pressable, StatusBar, View } from 'native-base'
import React from 'react'
import MaterialIcon from '../MaterialIcon'
import useEventHeader from './useEventHeader'

const EventImage = styled.Image`
  height: 90px;
  margin: 10px;
  width: 90%;
`

interface Props {
  canGoBack?: boolean
  setFavorite?: () => void
  isFavorite: boolean
}

const EventHeader: React.FC<Props> = (props) => {
  const { canGoBack, setFavorite, isFavorite } = props
  const { t, colors, logoUrl, cleanEvent, openDrawer, goBack } = useEventHeader()
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[800]} />
      <Box safeAreaTop bg={colors.gray[400]} />
      <HStack bg="gray.700" px="1" justifyContent="space-between" alignItems="center">
        <HStack alignItems="center">
          <IconButton
            onPress={canGoBack ? goBack : openDrawer}
            icon={<MaterialIcon size="sm" name={canGoBack ? 'arrow-back' : 'menu'} color="white" />}
          />
          <View flex={1} alignItems={'center'} background={'transparent'}>
            <EventImage resizeMode="contain" source={{ uri: logoUrl }} />
          </View>
          {setFavorite && (
            <IconButton onPress={setFavorite}>
              <MaterialIcon name={`star${isFavorite ? '' : '-border'}`} size="sm" color="white" />
            </IconButton>
          )}
          {!canGoBack && (
            <Menu
              trigger={(triggerProps) => (
                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                  <MaterialIcon name="more-vert" size="sm" color="white" />
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
