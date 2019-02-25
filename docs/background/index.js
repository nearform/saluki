import styled from 'styled-components/macro'
import { background, color, size } from '../../src'

export const Color = styled.h1`
  ${color.white}
  ${background.color.blue}
`

export const Image = styled.div`
  ${size.height.large}
  ${background.url('http://placekitten.com/704/96')}
`

export const Size = styled.div`
  ${size.height.large}
  ${background.size.contain}
  ${background.url('http://placekitten.com/300')}
`

export const Attachment = styled.div`
  ${size.height.large}
  ${background.attachment.fixed}
  ${background.url('http://placekitten.com/704')}
`

export const Position = styled.div`
  ${size.height.large}
  ${background.position.right}
  ${background.repeat.none}
  ${background.url('http://placekitten.com/96')}
`

export const Repeat = styled.div`
  ${size.height.large}
  ${background.repeat.none}
  ${background.url('http://placekitten.com/96')}
`
