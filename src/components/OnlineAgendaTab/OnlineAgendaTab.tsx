import React from 'react'
import { useUserState } from '../../reducers/userReducer'
import OnlineAgenda from '../OnlineAgenda/OnlineAgenda'
import OnlineAgendaLogin from '../OnlineAgendaLogin/OnlineAgendaLogin'

const OnlineAgendaTab = () => {
  const { username } = useUserState()
  if (username) return <OnlineAgenda />

  return <OnlineAgendaLogin />
}

export default OnlineAgendaTab
