import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import EventHeader from '../EventHeader/EventHeader'
import PageContainer from '../PageContainer'
import usePageWithTabs from './usePageWithTabs'

export type ITab<T> = { id: string; title: string; data: T }
interface Props<T> {
  render: (tab: T) => JSX.Element
  tabs: ITab<T>[]
}

const Tab = createMaterialTopTabNavigator()
const PageWithTabs = <T,>(props: Props<T>) => {
  const { tabs, render } = props
  const { tabBackgroundColor, tabIndicatorColor } = usePageWithTabs()
  return (
    <PageContainer>
      <EventHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarScrollEnabled: true,
          tabBarStyle: { backgroundColor: tabBackgroundColor },
          tabBarIndicatorStyle: { backgroundColor: tabIndicatorColor, height: 4 }
        }}
      >
        {tabs.map((tab) => (
          <Tab.Screen key={tab.id} name={tab.id} options={{ title: tab.title }}>
            {() => render(tab.data)}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </PageContainer>
  )
}

export default PageWithTabs
