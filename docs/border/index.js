import styled from 'styled-components/macro'
import { border } from '../../src'

export const Color = styled.h1`
  ${border.solid}
  ${border.blue}
`

export const Style = styled.h1`
  ${border.bottom.dashed}
`

export const Width = styled.h1`
  ${border.solid}
  ${border.thick}
`
