import styled from 'styled-components/macro'
import { color, psuedo } from '../../src'

export const Hover = styled.h1`
  ${color.red}
  ${psuedo.hover(color.blue)}
`
