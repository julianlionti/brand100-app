import React from 'react'
import PageContainer from './PageContainer'
import { IMap } from '../models/IFullEvent'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import styled from '@emotion/native'

const FullImage = styled.Image`
  width: 100%;
  height: 100%;
`

type Props = IMap
const MapViewer: React.FC<Props> = (props) => {
  const { image } = props
  return (
    <PageContainer bgColor={'white'}>
      <ReactNativeZoomableView bindToBorders zoomStep={0.5} initialZoom={1}>
        <FullImage resizeMode="center" source={{ uri: image }} />
      </ReactNativeZoomableView>
    </PageContainer>
  )
}

export default MapViewer
