import setupSpacing from './spacing'
import setupBreakpoint from './breakpoint'

export let spacing
export let breakpoint

export default function(customConfig) {
  spacing = setupSpacing(customConfig.spacing)
  breakpoint = setupBreakpoint(customConfig.breakpoint)
}
