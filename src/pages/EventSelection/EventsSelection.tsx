import styled from '@emotion/native'
import { Divider, Text } from 'native-base'
import React from 'react'
import { FlatList, RefreshControl } from 'react-native'
import EventItem from '../../components/EventItem'
import Header from '../../components/Header/Header'
import PageContainer from '../../components/PageContainer'
import useEventSelection from './useEventSelection'

const Title = styled(Text)`
  margin: 8px 0;
`

const EventsSelection = () => {
  const { t, events, isLoading, refreshEvents, selectEvent } = useEventSelection()
  return (
    <PageContainer noSpace>
      <Header />
      <Title textAlign="center" bold>
        {t('welcome')}
      </Title>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refreshEvents} />}
        data={events}
        ItemSeparatorComponent={() => <Divider my="2" />}
        renderItem={({ item }) => <EventItem onPress={() => selectEvent(item)} {...item} />}
      />
    </PageContainer>
  )
}

export default EventsSelection
