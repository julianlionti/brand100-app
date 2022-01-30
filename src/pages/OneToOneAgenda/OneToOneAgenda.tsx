import React from 'react'
import { Text } from 'native-base'
import EventHeader from '../../components/EventHeader/EventHeader'
import PageContainer from '../../components/PageContainer'
import useOneToOneAgenda from './useOneToOneAgenda'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FavoriteAgendaTab from '../../components/FavoriteAgendaTab/FavoriteAgendaTab'

const Tabs = createMaterialTopTabNavigator()

const OneToOneAgenda = () => {
  const { t } = useOneToOneAgenda()
  return (
    <PageContainer>
      <EventHeader />
      <Tabs.Navigator>
        <Tabs.Screen
          name='"FavoriteAgenda'
          component={FavoriteAgendaTab}
          options={{ title: t('onetoone.favorite_agenda') as string }}
        />
        <Tabs.Screen
          name='"FavoriteCatalogue'
          component={FavoriteAgendaTab}
          options={{ title: t('onetoone.favorite_catalogue') as string }}
        />
        <Tabs.Screen
          name='"OnlineAgenda'
          component={FavoriteAgendaTab}
          options={{ title: t('onetoone.online_access') as string }}
        />
      </Tabs.Navigator>
    </PageContainer>
  )
}

export default OneToOneAgenda
