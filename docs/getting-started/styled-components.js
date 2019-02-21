import React from 'react'
import styled from 'styled-components/macro'
import { color, text } from '../../src'

const StyledHeader = styled.h1`
  ${color.red}
  ${text.size.large}
`

export const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>
