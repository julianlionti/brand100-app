import React from 'react'
import AgendaActivity from '../../components/AgendaActivity/AgendaActivity'
import PageWithTabs from '../../components/PageWithTabs/PageWithTabs'
import useGeneralAgenda from './useGeneralAgenda'

const GeneralAgenda = () => {
  const { tabs } = useGeneralAgenda()

  return (
    <PageWithTabs
      tabs={tabs}
      render={(agenda) => <AgendaActivity key={agenda.day} {...agenda} />}
    />
  )
}

export default GeneralAgenda
