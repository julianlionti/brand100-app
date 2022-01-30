import React, { lazy } from 'react'
import { useMemo } from 'react'
import FavoriteCatalogueTab from '../../components/FavoriteCatalogueTab/FavoriteCatalogueTab'
import { ITab } from '../../components/TopTabs/TopTabs'
import { IAgendaActivity, ICatalogue } from '../../models/IFullEvent'
import { useT } from '../../translations'

const FavoriteAgendaTab = lazy(() => import('../../components/FavoriteAgendaTab/FavoriteAgendaTab'))

export type OneToOneTabs =
  | 'onetoone.favorite_agenda'
  | 'onetoone.favorite_catalogue'
  | 'onetoone.online_access'
type TabsType = null

const useOneToOneAgenda = () => {
  const t = useT()

  const idTabs: OneToOneTabs[] = useMemo(
    () => ['onetoone.favorite_agenda', 'onetoone.favorite_catalogue', 'onetoone.online_access'],
    []
  )

  const tabs = useMemo(() => {
    return idTabs.map(
      (id): ITab<TabsType> => ({
        id,
        title: t(id) as string,
        data: null
      })
    )
  }, [t, idTabs])

  const renderTab = (id: OneToOneTabs) => {
    switch (id) {
      default:
      case 'onetoone.favorite_agenda':
        return <FavoriteAgendaTab />
      case 'onetoone.favorite_catalogue':
        return <FavoriteCatalogueTab />
      case 'onetoone.online_access':
        return null
    }
  }

  return { t, tabs, renderTab }
}

export default useOneToOneAgenda
