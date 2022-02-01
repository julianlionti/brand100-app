import React from 'react'
import { Box, Button, Heading, HStack, Icon, IconButton, Text, VStack } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IAgenda, IAgendaActivity } from '../../models/IFullEvent'
import { parseHtml } from '../../utils/textUtils'
import useAgendaActivityItem from './useAgendaActivityItem'
import AgendaSponsorItem from '../AgendaSponsorItem/AgendaSponsorItem'

type MergedTypes = Omit<IAgenda, 'activities'> & IAgendaActivity
export interface AgendaActivityItemProps extends MergedTypes {
  isFromFav?: boolean
}

const AgendaActivityItem: React.FC<AgendaActivityItemProps> = (props) => {
  const {
    t,
    color,
    description,
    sponsors,
    hasDetail,
    name,
    schedule,
    openDetail,
    setFavorite,
    isFavorite
  } = useAgendaActivityItem(props)
  return (
    <HStack alignItems={'center'} py="2">
      <IconButton onPress={setFavorite}>
        <Icon as={MaterialIcons} name={isFavorite ? 'star' : 'star-border'} color={color} />
      </IconButton>
      <VStack flex={1} mr="4" space="1">
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <Heading size={'sm'} color="darkText">
            {name}
          </Heading>
          <Text color="darkText">{schedule}</Text>
        </HStack>
        <Text color="darkText">{parseHtml(description)}</Text>
        <VStack pt="2" mx="2">
          {sponsors.map((spo) => (
            <AgendaSponsorItem key={spo.idSponsor.toString()} {...spo} />
          ))}
        </VStack>
        {hasDetail && (
          <Box alignItems={'flex-end'}>
            <Button color={color} variant={'link'} onPress={openDetail}>
              {t('agenda.detail')?.toUpperCase()}
            </Button>
          </Box>
        )}
      </VStack>
    </HStack>
  )
}

export default AgendaActivityItem
