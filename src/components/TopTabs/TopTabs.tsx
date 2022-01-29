import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Center, Text, View } from 'native-base'
import React from 'react'
import useTopTabs from './useTopTabs'
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')

export type ITab<T> = { id: string; title: string; data: T }
interface Props<T> {
  render: (tab: T, id: string) => JSX.Element
  tabs: ITab<T>[]
  noHeader?: boolean
  small?: boolean
  fixed?: boolean
}

const Tab = createMaterialTopTabNavigator()
const TopTabs = <T,>(props: Props<T>) => {
  const { tabs, render, small, fixed } = props
  const { tabBackgroundColor, tabIndicatorColor, t } = useTopTabs()
  return (
    <View bgColor={'white'} flex={1}>
      {!tabs.length && (
        <Center py="1">
          <Text>{t('tabs.no_data')}</Text>
        </Center>
      )}
      {!!tabs.length && (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarScrollEnabled: fixed,
            tabBarStyle: { backgroundColor: tabBackgroundColor },
            tabBarIndicatorStyle: { backgroundColor: tabIndicatorColor, height: 4 },
            tabBarItemStyle: {
              width: small ? 120 : fixed ? width / tabs.length : undefined
            }
          }}
        >
          {tabs.map((tab) => (
            <Tab.Screen key={tab.id} name={tab.id} options={{ title: tab.title }}>
              {() => render(tab.data, tab.id)}
            </Tab.Screen>
          ))}
        </Tab.Navigator>
      )}
    </View>
  )
}

export default TopTabs
