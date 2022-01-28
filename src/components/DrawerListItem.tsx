import React from 'react'
import styled from '@emotion/native'
import { IMenu } from './DrawerContent/useDrawerContent'
import { Text } from 'native-base'

const Root = styled.TouchableOpacity`
  height: 26px;
  margin: 2px 10px;
  justify-content: center;
  border-bottom: 4px solid black;
`

const DrawerListItem: React.FC<IMenu> = (props) => {
  const { onPress, title } = props
  return (
    <Root onPress={onPress}>
      <Text>{title}</Text>
    </Root>
  )
}

export default DrawerListItem
