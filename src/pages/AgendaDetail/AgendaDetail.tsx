import React from 'react'
import { FlatList, Text } from 'native-base'
import PageContainer from '../../components/PageContainer'
import EventHeader from '../../components/EventHeader/EventHeader'
import useAgeDetail from './useAgeDetail'
import AgendaDetailItem from '../../components/AgendaDetailItem'

const AgendaDetail = () => {
  const { data } = useAgeDetail()
  return (
    <PageContainer bgColor={'white'}>
      <EventHeader canGoBack />
      <FlatList data={data} renderItem={({ item }) => <AgendaDetailItem {...item} />} />
    </PageContainer>
  )
}

export default AgendaDetail
