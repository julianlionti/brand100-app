import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OneToOneAgenda from '../pages/OneToOneAgenda/OneToOneAgenda'
import CatalogueDetail from '../pages/CatalogueDetail/CatalogueDetail'
import { ICatalogue } from '../models/IFullEvent'

export type OneToOneAgendaParamList = {
  Tabs: undefined
  CatalogueDetail: ICatalogue
}

const Stack = createStackNavigator<OneToOneAgendaParamList>()
const OneToOneAgendaStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={OneToOneAgenda} />
      <Stack.Screen name="CatalogueDetail" component={CatalogueDetail} />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  )
}

export default OneToOneAgendaStack
