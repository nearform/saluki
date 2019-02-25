import setupBackground from './background'
import setupBorder from './border'
import setupBreakpoint, {
  defaultRules as defaultBreakpointRules
} from './breakpoint'
import setupColor, { color as defaultColor } from './color'
import setupLayout, { defaultRules as defaultLayoutRules } from './layout'
import setupOpacity, { defaultRules as defaultOpacityRules } from './opacity'
import setupSize, {
  defaultRules as defaultSizeRules,
  combineRules as combineSizeRules
} from './size'
import setupSpacing, {
  defaultRules as defaultSpacingRules,
  combineRules as combineSpacingRules
} from './spacing'
import setupText, {
  defaultRules as defaultTextRules,
  combineRules as combineTextRules
} from './text'
export { default as psuedo } from './psuedo'

export let background = setupBackground({}, defaultColor)
export let border = setupBorder({}, defaultColor)
export let breakpoint = setupBreakpoint(defaultBreakpointRules)
export let color = setupColor(defaultColor)
export const layout = setupLayout(defaultLayoutRules)
export let opacity = setupOpacity(defaultOpacityRules)
export let size = setupSize(combineSizeRules(defaultSizeRules))
export let spacing = setupSpacing(combineSpacingRules(defaultSpacingRules))
export let text = setupText(combineTextRules(defaultTextRules))

export function init(customConfig) {
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
  opacity = setupOpacity({
    ...defaultOpacityRules,
    ...customConfig.opacity
  })
  size = setupSize(combineSizeRules(defaultSizeRules, customConfig.size))
  spacing = setupSpacing(
    combineSpacingRules(defaultSpacingRules, customConfig.spacing)
  )
  text = setupText(combineTextRules(defaultTextRules, customConfig.text))
}
