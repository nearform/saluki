import setupSpacing from './spacing'
import setupBreakpoint from './breakpoint'
import setupBorder from './border'
import setupColor, { color as defaultColor } from './color'

export let border
export let breakpoint
export let color
export let spacing

export default function(customConfig) {
  spacing = setupSpacing(customConfig.spacing)
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
