import React from 'react'
import { FlatList } from 'native-base'
import PaticipantsItem from '../PaticipantsItem'
import { IParticipant } from '../../models/IFullEvent'

interface Props {
  participants: IParticipant[]
}

const ParicipantsCatalogueTab: React.FC<Props> = (props) => {
  const { participants } = props
  return (
    <FlatList
      data={participants}
      numColumns={2}
      renderItem={({ item }) => <PaticipantsItem {...item} />}
    />
  )
}

export default ParicipantsCatalogueTab
