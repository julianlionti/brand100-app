import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Center, Skeleton, Text, View } from 'native-base'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import useTopTabs from './useTopTabs'

export type ITab<T> = { id: string; title: string; data: T }
interface Props<T> {
  render: (tab: T, id: string) => JSX.Element
  tabs: ITab<T>[]
  noHeader?: boolean
}

const Tab = createMaterialTopTabNavigator()
const TopTabs = <T,>(props: Props<T>) => {
  const { tabs, render } = props
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
            tabBarScrollEnabled: tabs.length > 4,
            tabBarStyle: { backgroundColor: tabBackgroundColor },
            tabBarIndicatorStyle: { backgroundColor: tabIndicatorColor, height: 4 },
            tabBarItemStyle: {},
            lazy: true,
            lazyPlaceholder: () => <ActivityIndicator />
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
