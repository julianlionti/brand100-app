import React from 'react'
import useMaps from './useMaps'
import MapViewer from '../../components/MapViewer'
import TopTabs from '../../components/TopTabs/TopTabs'
import PageContainer from '../../components/PageContainer'
import EventHeader from '../../components/EventHeader/EventHeader'

const Maps = () => {
  const { tabs } = useMaps()
  return (
    <PageContainer>
      <EventHeader />
      <TopTabs tabs={tabs} render={(map) => <MapViewer {...map} />} />
    </PageContainer>
  )
}

export default Maps
