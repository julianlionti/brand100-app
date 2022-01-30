import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ICatalogue } from '../../models/IFullEvent'
import { useEventsState } from '../../reducers/eventsReducer'
import { OneToOneAgendaParamList } from '../../routes/OneToOneAgendaStack'

type Navigation = NavigationProp<OneToOneAgendaParamList>

const useFavoriteCatalogueTab = () => {
  const { favoriteCatalogue } = useEventsState()
  const { navigate } = useNavigation<Navigation>()
  const data = favoriteCatalogue

  const openDetail = (detail: ICatalogue) => {
    navigate('CatalogueDetail', detail)
  }
  return { data, openDetail }
}

export default useFavoriteCatalogueTab
