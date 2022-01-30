import React from 'react'
import { SectionList } from 'native-base'
import useFavoriteAgendaTab from './useFavoriteAgendaTab'
import FavoriteAgendaSection from '../FavoriteAgendaSection/FavoriteAgendaSection'
import AgendaActivityItem from '../AgendaActivityItem/AgendaActivityItem'
import HasToUpdate from '../HasToUpdate/HasToUpdate'

const FavoriteAgendaTab = () => {
  const { sections } = useFavoriteAgendaTab()

  return (
    <>
      <HasToUpdate />
      <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => <FavoriteAgendaSection {...section} />}
        renderItem={({ item }) => <AgendaActivityItem {...item} />}
      />
    </>
  )
}

export default FavoriteAgendaTab
