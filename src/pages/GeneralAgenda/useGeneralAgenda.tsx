import { ITab } from '../../components/PageWithTabs/PageWithTabs'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { useT } from '../../translations'

const useGeneralAgenda = () => {
  const t = useT()
  const { generalAgenda } = useSelectedEvent()

  const tabs = generalAgenda
    .sort((a, b) => a.day - b.day)
    .map(
      (gene): ITab<typeof gene> => ({
        title: `${t('agenda.day')} ${gene.day}`,
        id: gene.day.toString(),
        data: gene
      })
    )

  return { generalAgenda, tabs }
}

export default useGeneralAgenda
