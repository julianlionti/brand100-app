import React from 'react'
import { Divider, FlatList } from 'native-base'
import CatalogueItem from '../CatalogueItem/CatalogueItem'
import useFavoriteCatalogueTab from './useFavoriteCatalogueTab'

const FavoriteCatalogueTab = () => {
  const { data, openDetail } = useFavoriteCatalogueTab()
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Divider />}
      renderItem={({ item }) => <CatalogueItem onPress={() => openDetail(item)} {...item} />}
    />
  )
}

export default FavoriteCatalogueTab
