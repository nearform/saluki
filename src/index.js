import setupSpacing from './spacing'
import setupBreakpoint from './breakpoint'
import setupBorder from './border'
import setupColor, { color as defaultColor } from './color'
import setupBackground from './background'

export let border
export let breakpoint
export let color
export let spacing
export let background

export default function(customConfig) {
  spacing = setupSpacing(customConfig.spacing)
  background = setupBackground(customConfig.background, {...defaultColor, ...customConfig.color})
  breakpoint = setupBreakpoint(customConfig.breakpoint)

  border = setupBorder(customConfig.borderWidths, {
    ...defaultColor,
    ...customConfig.color
  })
  color = setupColor({
    ...defaultColor,
    ...customConfig.color
  })
}
