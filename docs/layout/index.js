import styled from 'styled-components/macro'
import { layout, background, size, spacing } from '../../src'

export const Container = styled.div`
  ${layout.display.flex}
`

export const Direction = styled.div`
  ${layout.display.flex}
  ${layout.direction.rowReverse}
`

export const Box = styled.div`
  ${size.height.medium}
  ${size.width.half}
  ${({ light }) => (light ? background.color.red : background.color.black)}
`

export const FlexBox = styled.div`
  ${size.height.medium}
  ${layout.flex.one}
  ${({ bg }) => background.color[bg]}
`

export const DirectionBox = styled.div`
  ${size.height.medium}
  ${size.width.third}
  ${({ light }) => (light ? background.color.red : background.color.black)}
`
export const AlignItems = styled.div`
  ${size.height.large}
  ${layout.display.flex}
  ${layout.alignItems.center}
  ${background.color.yellow}
`

export const AlignContent = styled.div`
  ${size.height.large}
  ${layout.wrap.wrap}
  ${layout.display.flex}
  ${layout.alignContent.between}
  ${background.color.yellow}
`

export const AlignContentBox = styled.div`
  ${size.height.small}
  ${size.width.full}
  ${({ light }) => (light ? background.color.red : background.color.black)}
`

export const Wrap = styled.div`
  ${layout.wrap.wrap}
  ${layout.display.flex}
`

export const AlignSelf = styled.div`
  ${size.height.large}
  ${layout.display.flex}
  ${background.color.yellow}
`

export const AlignSelfBox = styled.div`
  ${({ stretch }) => (stretch ? layout.alignSelf.stretch : size.height.medium)}
  ${size.width.quarter}
  ${({ stretch }) => (stretch ? background.color.red : background.color.black)}
`

export const JustifyContent = styled.div`
  ${layout.display.flex}
  ${layout.justifyContent.around}
`

export const JustifyContentBox = styled.div`
  ${size.height.medium}
  ${size.width.third}
  ${({ light }) => (light ? background.color.red : background.color.black)}
`

export const FloatContainer = styled.div`
  ${layout.display.block}
  ${size.height.large}
`

export const Float = styled.div`
  ${size.width.half}
  ${size.height.medium}
  ${layout.float.right}
  ${background.color.red}
`

export const OverflowContainer = styled.div`
  ${layout.display.block}
  ${size.height.large}
`

export const Overflow = styled.div`
  ${layout.overflow.scroll}
  ${size.height.medium}
`

export const PositionContainer = styled.div`
  ${spacing.padding.vertical.medium}
`

export const Position = styled.div`
  ${layout.position.fixed}
`
