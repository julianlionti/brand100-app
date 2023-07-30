import React from 'react'
import { View, Image } from 'native-base'
import { useSponsor, SponsorProps } from './useSponsor'
import normalize from 'react-native-normalize'

const imageHeight = 60

const Sponsor: React.FC<SponsorProps> = (props) => {
  const { sponsors, hasSponsor } = useSponsor(props)

  if (!hasSponsor) return null
  return (
    <View alignItems="center" mt={2} maxHeight={normalize(imageHeight, 'height')}>
      <Image
        resizeMode="contain"
        width="90%"
        height={normalize(imageHeight, 'height')}
        source={{ uri: sponsors }}
        alt="Sponsor"
      />
    </View>
  )
}

export default Sponsor
