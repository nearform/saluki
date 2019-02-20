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

export let background = setupBackground({}, defaultColor)
export let border = setupBorder({}, defaultColor)
export let breakpoint = setupBreakpoint(defaultBreakpointRules)
export let color = setupColor(defaultColor)
export let spacing = setupSpacing(combineSpacingRules(defaultSpacingRules))
export let text = setupText(combineTextRules(defaultTextRules))

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
