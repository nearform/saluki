import React from 'react'
import styled, { css } from 'styled-components/macro'
import { background, color } from '../../src'

export const Styled = styled.h1`
  ${props => props.invert && color.white}
  ${props => (props.invert ? background.black : background.white)}
`

export const CSSProp = ({ children, invert }) => {
  return (
    <h1
      css={css`
        ${invert && color.white}
        ${invert ? background.black : background.white}
      `}>
      {children}
    </h1>
  )
}

export const Array = ({ children, invert }) => (
  <h1
    css={[invert && color.white, invert ? background.black : background.white]}>
    {children}
  </h1>
)

export const ObjectLiteral = styled.h1(props => ({
  ...(props.invert && color.white),
  ...(props.invert ? background.black : background.white)
}))
