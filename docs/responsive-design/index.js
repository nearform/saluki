import styled from 'styled-components/macro'
import { color, breakpoint } from '../../src'

export const Breakpoint = styled.h1`
  ${color.red}
  ${breakpoint.medium(color.blue)}
  ${breakpoint.large(color.green)}
`
