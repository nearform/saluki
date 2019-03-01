import styled from 'styled-components/macro'
import {
  background,
  border,
  color,
  layout,
  size,
  spacing,
  text
} from '../../src'

export const Color = styled.h1`
  ${color.white}
  ${border.solid}
  ${border.blue}
  ${background.color.black}
`

export const Container = styled.div`
  ${spacing.margin.bottom.medium}
  ${layout.display.flex}
`

export const Box = styled.div`
  flex: 1;
  ${layout.display.flex}
  ${layout.justifyContent.center}
  ${layout.direction.column}
  ${({ color }) => background.color[color]}
  ${size.height.large}
`

export const Text = styled.p`
  ${text.align.center}
  ${text.weight.bold}
  ${({ light }) => light && color.white}
`
