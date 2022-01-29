import { Heading, Text, View } from 'native-base'
import React from 'react'
import EventHeader from '../../components/EventHeader/EventHeader'
import PageContainer from '../../components/PageContainer'
import PageWithTabs from '../../components/TopTabs/TopTabs'
import useCatalogueDetail, { CatalogueDetialTabs } from './useCatalogueDetail'

const CatalogueDetail: React.FC = () => {
  const { name, tabs, renderTab } = useCatalogueDetail()
  return (
    <PageContainer bgColor={'white'}>
      <EventHeader canGoBack />
      <View alignItems={'center'} justifyContent={'center'} height={45}>
        <Heading>{name}</Heading>
      </View>
      <PageWithTabs
        noHeader
        fixed
        tabs={tabs}
        render={(tab, id) => renderTab(tab, id as CatalogueDetialTabs)}
      />
    </PageContainer>
  )
}

export default CatalogueDetail
