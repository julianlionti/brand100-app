import React from 'react'
import EventHeader from '../../components/EventHeader/EventHeader'
import PageContainer from '../../components/PageContainer'
import useOneToOneAgenda, { OneToOneTabs } from './useOneToOneAgenda'
import TopTabs from '../../components/TopTabs/TopTabs'

// export type OneToOneAgendaStackParamList = {
//   FavoriteAgenda: undefined
//   FavoriteCatalogue: undefined
//   OnlineAgenda: undefined
// }

const OneToOneAgenda = () => {
  const { t, tabs, renderTab } = useOneToOneAgenda()
  return (
    <PageContainer>
      <EventHeader />
      <TopTabs tabs={tabs} render={(tabs, id) => renderTab(id as OneToOneTabs)} />
    </PageContainer>
  )
}

export default OneToOneAgenda
