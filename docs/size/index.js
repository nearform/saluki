import styled from 'styled-components/macro'
import { size, background } from '../../src'

export const Width = styled.div`
  ${size.width.half}
  ${background.color.red}
`

export const Height = styled.div`
  ${size.height.medium}
  ${background.color.black}
`
