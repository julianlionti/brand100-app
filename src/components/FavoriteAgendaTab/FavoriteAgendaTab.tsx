import React from 'react'
import { SectionList, Text } from 'native-base'
import AgendaDetailItem from '../AgendaDetailItem'

const FavoriteAgendaTab = () => {
  return (
    <SectionList
      sections={[{ name: 'Section', data: [] }]}
      renderSectionHeader={({ section }) => <Text>{section.name}</Text>}
      renderItem={({ item }) => <AgendaDetailItem {...item} />}
    />
  )
}

export default FavoriteAgendaTab
