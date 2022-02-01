import React from 'react'
import { Divider, FlatList } from 'native-base'
import CatalogueItem from '../CatalogueItem/CatalogueItem'
import useFavoriteCatalogueTab from './useFavoriteCatalogueTab'
import HasToUpdate from '../HasToUpdate/HasToUpdate'

const FavoriteCatalogueTab = () => {
  const { data, openDetail } = useFavoriteCatalogueTab()
  return (
    <>
      <HasToUpdate />
      <FlatList
        data={data}
        keyExtractor={(item) => item.idCatalogue.toString()}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => <CatalogueItem onPress={() => openDetail(item)} {...item} />}
      />
    </>
  )
}

export default FavoriteCatalogueTab
