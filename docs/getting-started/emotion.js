/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { color, text } from '../../src'

export const Header = ({ children }) => (
  <h1
    css={css`
      ${color.red}
      ${text.size.large}
    `}>
    {children}
  </h1>
)
