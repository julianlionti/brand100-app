import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useMemo } from 'react'
import useSelectedEvent from '../../hooks/useSelectedEvent'
import { ICatalogue } from '../../models/IFullEvent'
import { CatalogueStackParamList } from '../../routes/CatalogueStack'

type Routes = RouteProp<CatalogueStackParamList, 'Catalogue'>
// type Navigation = StackNavigationProp<CatalogueStackParamList>
const useCatalogue = () => {
  const { catalogue } = useSelectedEvent()
  const { params } = useRoute<Routes>()
  const navigation = useNavigation<any>()
  const openDetail = (item: ICatalogue) => {
    navigation.push('Detail', item)
  }
  const canGoBack = params?.canGoBack

  const goBack = useMemo(() => {
    if (!canGoBack) return undefined
    return () => {
      navigation.navigate('OneToOneAgenda')
    }
  }, [canGoBack, navigation])

  return { catalogue, openDetail, goBack }
}

export default useCatalogue
