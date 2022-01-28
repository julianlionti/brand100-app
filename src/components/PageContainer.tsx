import styled from '@emotion/native'
import { View } from 'native-base'
import React from 'react'

type StyleProps = Partial<Record<'noSpace', boolean>>
const Root = styled(View)<StyleProps>`
  height: 100%;
  width: 100%;
`

const PageContainer: React.FC = (props) => {
  const { children } = props
  return <Root>{children}</Root>
}

export default PageContainer
