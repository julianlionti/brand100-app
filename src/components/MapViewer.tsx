import React from 'react'
import PageContainer from './PageContainer'
import { IMap } from '../models/IFullEvent'
import ImageZoom from 'react-native-image-pan-zoom'
import { Dimensions } from 'react-native'
import normalize from 'react-native-normalize'
import { Image } from 'native-base'

type Props = IMap
const MapViewer: React.FC<Props> = (props) => {
  const { image } = props

  const width = normalize(350, 'width')
  const height = normalize(550, 'height')

  return (
    <PageContainer bgColor={'white'}>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageHeight={height}
        imageWidth={width}
      >
        <Image
          alt={image}
          resizeMode="center"
          width={width}
          height={height}
          source={{ uri: image }}
        />
      </ImageZoom>
    </PageContainer>
  )
}

export default MapViewer
