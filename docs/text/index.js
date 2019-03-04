import styled from 'styled-components/macro'
import { color, text } from '../../src'

export const Color = styled.h1`
  ${color.blue}
`

export const Family = styled.h1`
  ${text.family.serif}
`

export const Size = styled.h1`
  ${text.size.large}
`

export const Weight = styled.h1`
  ${text.weight.thin}
`

export const Align = styled.h1`
  ${text.align.center}
`

export const Transform = styled.h1`
  ${text.transform.uppercase}
`

export const Style = styled.h1`
  ${text.style.italic}
`

export const Decoration = styled.h1`
  ${text.decoration.underline}
`

export const LineHeight = styled.p`
  ${text.lineHeight.large}
`

export const LetterSpacing = styled.h1`
  ${text.letterSpacing.small}
`
