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

export let spacing
export let breakpoint
export let text

export default function(customConfig) {
  spacing = setupSpacing(
    combineSpacingRules(defaultSpacingRules, customConfig.spacing)
  )
  breakpoint = setupBreakpoint({
    ...defaultBreakpointRules,
    ...customConfig.breakpoint
  })
  text = setupText(combineTextRules(defaultTextRules, customConfig.text))
}
