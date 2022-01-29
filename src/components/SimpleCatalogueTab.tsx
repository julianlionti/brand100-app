import { Text, VStack } from 'native-base'
import React from 'react'
import { useT } from '../translations'
import { parseHtml } from '../utils/textUtils'
interface Props {
  textToShow: string
}

const SimpleCatalogueTab: React.FC<Props> = (props) => {
  const { textToShow } = props
  const t = useT()
  return (
    <VStack padding={'2'}>
      <Text fontWeight={!textToShow ? 'bold' : 'normal'} color={'darkText'}>
        {textToShow ? parseHtml(textToShow) : t('catalogue.news.no_data')}
      </Text>
    </VStack>
  )
}

export default SimpleCatalogueTab