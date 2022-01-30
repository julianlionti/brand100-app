import React from 'react'
import { Center } from 'native-base'
import { ActivityIndicator } from 'react-native'
import PageContainer from './PageContainer'

interface Props {
  full?: boolean
  Header?: JSX.Element
}

const Loading: React.FC<Props> = (props) => {
  const { full, Header } = props

  if (full) {
    return (
      <PageContainer>
        {Header}
        <Center flex={1}>
          <ActivityIndicator size={'large'} />
        </Center>
      </PageContainer>
    )
  }

  return <ActivityIndicator />
}

export default Loading
