import React from 'react'
import useCatalogue from './useCatalogue'
import PageContainer from '../../components/PageContainer'
import { Divider, FlatList, Text } from 'native-base'
import EventHeader from '../../components/EventHeader/EventHeader'
import CatalogueItem from '../../components/CatalogueItem/CatalogueItem'

const Catalogue = () => {
  const { catalogue, openDetail } = useCatalogue()
  return (
    <PageContainer bgColor={'white'}>
      <EventHeader />
      <FlatList
        data={catalogue}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => <CatalogueItem {...item} onPress={() => openDetail(item)} />}
      />
    </PageContainer>
  )
}

export default Catalogue
