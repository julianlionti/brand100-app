import { Center, IconButton } from 'native-base'
import React from 'react'
import MaterialIcon from './MaterialIcon'
import PageContainer from './PageContainer'

interface Props {
  onPressAdd?: () => void
  fab: JSX.Element
}

const EmptyListRoot: React.FC<Props> = (props) => {
  const { children, onPressAdd, fab } = props
  return (
    <PageContainer bgColor={'white'}>
      <Center flex={1} mt={-90}>
        {children}
        {onPressAdd && (
          <IconButton size={'60'} onPress={onPressAdd}>
            <MaterialIcon size={'60'} color={'primary.600'} name="add-circle-outline" />
          </IconButton>
        )}
      </Center>
      {fab}
    </PageContainer>
  )
}

export default EmptyListRoot
