import React from 'react'
import { Divider, SectionList, Text } from 'native-base'
import PageContainer from '../PageContainer'
import useOnlineAgenda from './useOnlineAgenda'
import OnlineAgendaItem from '../OnlineAgendaItem'
import FavoriteAgendaSection from '../FavoriteAgendaSection/FavoriteAgendaSection'

const OnlineAgenda = () => {
  const { agenda } = useOnlineAgenda()

  return (
    <PageContainer bgColor={'white'}>
      <SectionList
        renderSectionHeader={({ section: { eventDay } }) => (
          <FavoriteAgendaSection day={eventDay} />
        )}
        SectionSeparatorComponent={() => <Divider />}
        sections={agenda}
        renderItem={({ item }) => <OnlineAgendaItem {...item} />}
      />
    </PageContainer>
  )
}

export default OnlineAgenda
