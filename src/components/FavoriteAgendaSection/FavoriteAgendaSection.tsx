import React from 'react'
import { Center, Heading, View } from 'native-base'
import useFavoriteAgendaSection from './useFavoriteAgendaSection'
import { SectionFavoriteType } from '../../reducers/eventsReducer'
import normalize from 'react-native-normalize'

const FavoriteAgendaSection: React.FC<SectionFavoriteType> = (props) => {
  const { color, contrastColor, title } = useFavoriteAgendaSection(props)
  return (
    <View bgColor={color} justifyContent="center" minHeight={normalize(12, 'height')}>
      <Center>
        <Heading size="sm" color={contrastColor}>
          {title}
        </Heading>
      </Center>
    </View>
  )
}

export default FavoriteAgendaSection
