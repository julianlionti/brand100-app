import React from 'react'
import useMaps from './useMaps'
import MapViewer from '../../components/MapViewer'
import PageWithTabs from '../../components/PageWithTabs/PageWithTabs'

const Maps = () => {
  const { tabs } = useMaps()
  return <PageWithTabs tabs={tabs} render={(map) => <MapViewer {...map} />} />
}

export default Maps
