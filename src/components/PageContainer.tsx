import styled from '@emotion/native'
import { View } from 'native-base'
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types'
import React from 'react'

type StyleProps = Partial<Record<'noSpace', boolean>>
const Root = styled(View)<StyleProps>`
  height: 100%;
  width: 100%;
`

const PageContainer: React.FC<IViewProps> = (props) => {
  const { children, ...viewProps } = props
  return <Root {...viewProps}>{children}</Root>
}

export default PageContainer
