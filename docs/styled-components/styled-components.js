import React from 'react'
import styled from 'styled-components/macro'
import { color, text } from '../../src'

const StyledHeader = styled.h1`
  ${color.red}
  ${text.size.large}
`

export const TaggedTemplateLiteral = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
)

export const CSSProp = ({ children }) => (
  <h1
    css={`
      ${color.red}
      ${text.size.large}
    `}>
    {children}
  </h1>
)

export const CSSPropArray = ({ children }) => (
  <h1 css={[color.red, text.size.large]}>{children}</h1>
)

export const CSSPropObjectLiteral = ({ children }) => (
  <h1
    css={{
      ...color.red,
      ...text.size.large
    }}>
    {children}
  </h1>
)

const StyledHeaderObjectLiteral = styled.h1({
  ...color.red,
  ...text.size.large
})

export const ObjectLiteral = ({ children }) => (
  <StyledHeaderObjectLiteral>{children}</StyledHeaderObjectLiteral>
)
