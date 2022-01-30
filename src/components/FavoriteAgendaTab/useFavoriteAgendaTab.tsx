import { FavoriteAgendaType, useEventsState } from '../../reducers/eventsReducer'

const useFavoriteAgendaTab = () => {
  const { favoriteAgenda } = useEventsState()

  const initialAgendaSection: { date: string; day: number; data: FavoriteAgendaType[] }[] = []
  const sections = favoriteAgenda.reduce((acc, it) => {
    const exists = acc.find((fav) => fav.date === it.date)
    if (exists) {
      exists.data = [...exists.data, it]
      return acc
    }

    return [...acc, { date: it.date, day: it.day, data: [it] }]
  }, initialAgendaSection)

  return { sections: sections }
}

export default useFavoriteAgendaTab
