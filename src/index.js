import setupSpacing, {
  defaultRules as defaultSpacingRules,
  combineRules as combineSpacingRules
} from './spacing'
import setupBreakpoint, {
  defaultRules as defaultBreakpointRules
} from './breakpoint'
import setupText, {
  defaultRules as defaultTextRules,
  combineRules as combineTextRules
} from './text'
import setupBorder from './border'
import setupColor, { color as defaultColor } from './color'

export let border
export let breakpoint
export let color
export let spacing
export let text

export default function(customConfig) {
  spacing = setupSpacing(
    combineSpacingRules(defaultSpacingRules, customConfig.spacing)
  )
  breakpoint = setupBreakpoint({
    ...defaultBreakpointRules,
    ...customConfig.breakpoint
  })
  border = setupBorder(customConfig.borderWidths, {
    ...defaultColor,
    ...customConfig.color
  })
  color = setupColor({
    ...defaultColor,
    ...customConfig.color
  })
  text = setupText(combineTextRules(defaultTextRules, customConfig.text))
}
