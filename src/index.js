import setupBackground from './background'
import setupBorder from './border'
import setupBreakpoint, {
  defaultRules as defaultBreakpointRules
} from './breakpoint'
import setupColor, { color as defaultColor } from './color'
import setupSpacing, {
  defaultRules as defaultSpacingRules,
  combineRules as combineSpacingRules
} from './spacing'
import setupText, {
  defaultRules as defaultTextRules,
  combineRules as combineTextRules
} from './text'

export let background
export let border
export let breakpoint
export let color
export let spacing
export let text

export default function(customConfig) {
  background = setupBackground(customConfig.background, {
    ...defaultColor,
    ...customConfig.color
  })
  border = setupBorder(customConfig.borderWidths, {
    ...defaultColor,
    ...customConfig.color
  })
  breakpoint = setupBreakpoint({
    ...defaultBreakpointRules,
    ...customConfig.breakpoint
  })
  color = setupColor({
    ...defaultColor,
    ...customConfig.color
  })
  spacing = setupSpacing(
    combineSpacingRules(defaultSpacingRules, customConfig.spacing)
  )
  text = setupText(combineTextRules(defaultTextRules, customConfig.text))
}
