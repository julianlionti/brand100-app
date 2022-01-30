import React from 'react'
import { Center, Heading } from 'native-base'
import useFavoriteAgendaSection from './useFavoriteAgendaSection'
import { SectionFavoriteType } from '../../reducers/eventsReducer'

const FavoriteAgendaSection: React.FC<SectionFavoriteType> = (props) => {
  const { color, contrastColor, title } = useFavoriteAgendaSection(props)
  return (
    <Center bgColor={color} height={'12'}>
      <Heading size="sm" color={contrastColor}>
        {title}
      </Heading>
    </Center>
  )
}

export default FavoriteAgendaSection
