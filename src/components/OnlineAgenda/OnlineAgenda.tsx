import React from 'react'
import { Divider, SectionList } from 'native-base'
import PageContainer from '../PageContainer'
import useOnlineAgenda from './useOnlineAgenda'
import OnlineAgendaItem from '../OnlineAgendaItem'
import FavoriteAgendaSection from '../FavoriteAgendaSection/FavoriteAgendaSection'
import { RefreshControl } from 'react-native'

const OnlineAgenda = () => {
  const { agenda, isLoading, refreshItems } = useOnlineAgenda()

  return (
    <PageContainer bgColor={isLoading ? undefined : 'white'}>
      <SectionList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refreshItems} />}
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
