import React from 'react'
import { Divider, FlatList } from 'native-base'
import { IAgenda } from '../../models/IFullEvent'
import AgendaActivityItem from '../AgendaActivityItem/AgendaActivityItem'

const AgendaActivity: React.FC<IAgenda> = (props) => {
  const { activities } = props
  return (
    <FlatList
      data={activities}
      ItemSeparatorComponent={() => <Divider />}
      keyExtractor={(item) => item.idActivity.toString()}
      renderItem={({ item }) => <AgendaActivityItem {...item} />}
    />
  )
}

export default AgendaActivity
