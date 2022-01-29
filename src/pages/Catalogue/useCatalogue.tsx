import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { ICatalogue } from '../../models/IFullEvent'
import { CatalogueStackParamList } from '../../routes/CatalogueStack'

type Navigation = StackNavigationProp<CatalogueStackParamList, 'Agenda'>
const useCatalogue = () => {
  const { catalogue } = useSelectedEvent()
  const navigation = useNavigation<Navigation>()
  console.log(navigation)
  const openDetail = (item: ICatalogue) => {
    navigation.push('Detail', item)
  }

  return { catalogue, openDetail }
}

export default useCatalogue
