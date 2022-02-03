import { useCallback, useEffect, useMemo } from 'react'
import { getUserAgenda } from '../../actions/userActions'
import { useAppDispatch } from '../../hooks/redux'
import { IOnlineAgenda } from '../../models/IOnlineAgenda'
import { useUserState } from '../../reducers/userReducer'
import { useT } from '../../translations'

const useOnlineAgenda = () => {
  const t = useT()
  const { agenda, username } = useUserState()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserAgenda())
  }, [dispatch])

  const sections = useMemo(() => {
    const initialSection: { title: string; eventDay: number; data: IOnlineAgenda[] }[] = []
    return agenda.reduce((acc, it) => {
      const exists = acc.find((sec) => sec.eventDay === it.eventDay)
      if (it.eventDay === 0) return acc
      if (exists) {
        exists.data.push(it)
        return acc
      }
      return [
        ...acc,
        { title: `${t('agenda.day')} ${it.eventDay}`, eventDay: it.eventDay, data: [it] }
      ].sort((a, b) => a.eventDay - b.eventDay)
    }, initialSection)
  }, [agenda, t])

  const isLoading = !!username && !agenda.length

  const refreshItems = useCallback(() => {
    dispatch(getUserAgenda({ refresh: true }))
  }, [dispatch])

  return { agenda: sections, username, isLoading, refreshItems }
}

export default useOnlineAgenda
