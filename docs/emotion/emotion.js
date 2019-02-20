/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { color, text } from '../../src'

export const CSSProp = ({ children }) => (
  <h1
    css={css`
      ${color.red}
      ${text.size.large}
    `}>
    {children}
  </h1>
)

export const Array = ({ children }) => (
  <h1 css={[color.red, text.size.large]}>{children}</h1>
)

export const ObjectLiteral = ({ children }) => (
  <h1
    css={{
      ...color.red,
      ...text.size.large
    }}>
    {children}
  </h1>
)

const StyledHeader = styled.h1`
  ${color.red}
  ${text.size.large}
`

export const Styled = ({ children }) => <StyledHeader>{children}</StyledHeader>

const StyledHeaderObjectLiteral = styled.h1({
  ...color.red,
  ...text.size.large
})

export const StyledObjectLiteral = ({ children }) => (
  <StyledHeaderObjectLiteral>{children}</StyledHeaderObjectLiteral>
)
