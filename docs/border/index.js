import styled from 'styled-components/macro'
import { border } from '../../src'

export const Color = styled.h1`
  ${border.style.solid}
  ${border.color.blue}
`

export const Style = styled.h1`
  ${border.color.black}
  ${border.style.bottom.dashed}
`

export const Width = styled.h1`
  ${border.style.solid}
  ${border.width.thick}
`

export const Radius = styled.h1`
  ${border.style.solid}
  ${border.radius.large}
`
