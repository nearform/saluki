import setupBackground, {
  defaultRules as defaultBackgroundRules,
  combineRules as combineBackgroundRules
} from './background'
import setupBorder, {
  defaultRules as defaultBorderRules,
  combineRules as combineBorderRules
} from './border'
import setupBreakpoint, {
  defaultRules as defaultBreakpointRules
} from './breakpoint'
import setupColor, { color as defaultColorRules } from './color'
import setupLayout, { defaultRules as defaultLayoutRules } from './layout'
import setupOpacity, { defaultRules as defaultOpacityRules } from './opacity'
import setupShadow, { defaultRules as defaultShadowRules } from './shadow'
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

export let background = setupBackground(
  combineBackgroundRules(defaultBackgroundRules, undefined, defaultColorRules)
)
export let border = setupBorder(
  combineBorderRules(defaultBorderRules, undefined, defaultColorRules)
)
export let breakpoint = setupBreakpoint(defaultBreakpointRules)
export let color = setupColor(defaultColorRules)
export const layout = setupLayout(defaultLayoutRules)
export let opacity = setupOpacity(defaultOpacityRules)
export let shadow = setupShadow(defaultShadowRules)
export let size = setupSize(combineSizeRules(defaultSizeRules))
export let spacing = setupSpacing(combineSpacingRules(defaultSpacingRules))
export let text = setupText(combineTextRules(defaultTextRules))

export function init(customConfig) {
  background = setupBackground(
    combineBackgroundRules(defaultBackgroundRules, customConfig.background, {
      ...defaultColorRules,
      ...customConfig.color
    })
  )
  border = setupBorder(
    combineBorderRules(defaultBorderRules, customConfig.border, {
      ...defaultColorRules,
      ...customConfig.color
    })
  )
  breakpoint = setupBreakpoint({
    ...defaultBreakpointRules,
    ...customConfig.breakpoint
  })
  color = setupColor({
    ...defaultColorRules,
    ...customConfig.color
  })
  opacity = setupOpacity({
    ...defaultOpacityRules,
    ...customConfig.opacity
  })
  shadow = setupShadow({
    ...defaultShadowRules,
    ...customConfig.shadow
  })
  size = setupSize(combineSizeRules(defaultSizeRules, customConfig.size))
  spacing = setupSpacing(
    combineSpacingRules(defaultSpacingRules, customConfig.spacing)
  )
  text = setupText(combineTextRules(defaultTextRules, customConfig.text))
}
