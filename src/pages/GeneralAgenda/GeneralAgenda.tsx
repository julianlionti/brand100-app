import React from 'react'
import AgendaActivity from '../../components/AgendaActivity/AgendaActivity'
import EventHeader from '../../components/EventHeader/EventHeader'
import PageContainer from '../../components/PageContainer'
import PageWithTabs from '../../components/TopTabs/TopTabs'
import useGeneralAgenda from './useGeneralAgenda'

const GeneralAgenda = () => {
  const { tabs } = useGeneralAgenda()

  return (
    <PageContainer>
      <EventHeader />
      <PageWithTabs
        tabs={tabs}
        small
        render={(agenda) => <AgendaActivity key={agenda.day} {...agenda} />}
      />
    </PageContainer>
  )
}

export default GeneralAgenda
