import React from 'react'
import useFeatured from './useFeatured'
import MapViewer from '../../components/MapViewer'
import PageWithTabs from '../../components/TopTabs/TopTabs'
import PageContainer from '../../components/PageContainer'
import EventHeader from '../../components/EventHeader/EventHeader'

const Featured = () => {
  const { tabs } = useFeatured()
  return (
    <PageContainer>
      <EventHeader />
      <PageWithTabs tabs={tabs} render={(map) => <MapViewer {...map} />} />
    </PageContainer>
  )
}

export default Featured
