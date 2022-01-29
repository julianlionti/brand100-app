import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ITab } from '../../components/TopTabs/TopTabs'
import { IParticipant } from '../../models/IFullEvent'
import { CatalogueStackParamList } from '../../routes/CatalogueStack'
import { Translations, useT } from '../../translations'
import SimpleCatalogueTab from '../../components/SimpleCatalogueTab'
import { Text } from 'native-base'
import ParicipantsCatalogueTab from '../../components/ParicipantsCatalogueTab/ParicipantsCatalogueTab'

export type CatalogueDetialTabs =
  | 'catalogue.information'
  | 'catalogue.news'
  | 'catalogue.paricipants'
type TabsData = string | IParticipant[]

type Route = RouteProp<CatalogueStackParamList, 'Detail'>
const useCatalogueDetail = () => {
  const { params } = useRoute<Route>()
  const t = useT()

  const idTabs: CatalogueDetialTabs[] = [
    'catalogue.information',
    'catalogue.news',
    'catalogue.paricipants'
  ]
  const tabs = idTabs.map((id): ITab<TabsData> => {
    const dataFromId = () => {
      switch (id) {
        case 'catalogue.information':
          return params.information
        case 'catalogue.news':
          return params.news
        case 'catalogue.paricipants':
          return params.participants
      }
    }
    return {
      id,
      title: t(id as Translations) as string,
      data: dataFromId()
    }
  })

  const renderTab = (tab: TabsData, id: CatalogueDetialTabs) => {
    switch (id) {
      case 'catalogue.information':
      case 'catalogue.news':
        return <SimpleCatalogueTab textToShow={tab as unknown as string} />
      case 'catalogue.paricipants':
        return <ParicipantsCatalogueTab participants={tab as unknown as IParticipant[]} />
      default:
        return <Text bgColor={'darkText'}>No Tab Created</Text>
    }
  }

  return { ...params, tabs, renderTab }
}

export default useCatalogueDetail
