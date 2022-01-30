import React from 'react'
import { Avatar, Text, VStack } from 'native-base'
import { IParticipant } from '../models/IFullEvent'

const PaticipantsItem: React.FC<IParticipant> = (props) => {
  const { name, photo, position, surname } = props
  return (
    <VStack alignItems={'center'} width={'50%'} py="2">
      <Avatar source={{ uri: photo }} size={'32'} my="2" />
      <Text color="darkText" fontWeight={'bold'}>{`${name} ${surname}`}</Text>
      <Text color="darkText">{position}</Text>
    </VStack>
  )
}

export default PaticipantsItem
