function generateRules(rules, cssProp) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    newRules[key] = {
      [cssProp]: value
    }
  }

  return newRules
}

function generateBreakpointRules(rules) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    if (typeof value !== 'object' || (!value.min && !value.max)) {
      throw new Error(
        'Custom breakpoint rules require an object with either a min, max or both values, please check the config passed in to Saluki.'
      )
    }
    newRules[key] = function(rule) {
      if (value.min && value.max) {
        return {
          [`@media (min-width: ${value.min}) and (max-width: ${
            value.max
          })`]: rule
        }
      }

      if (value.max) {
        return {
          [`@media (max-width: ${value.max})`]: rule
        }
      }

      return {
        [`@media (min-width: ${value.min})`]: rule
      }
    }
  }

  return newRules
}

function generateVerticalRules(rules, name) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    newRules[key] = {
      [`${name}Top`]: value,
      [`${name}Bottom`]: value
    }
  }

  return newRules
}

function generateHorizontalRules(rules, name) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    newRules[key] = {
      [`${name}Left`]: value,
      [`${name}Right`]: value
    }
  }

  return newRules
}

function createRule(name) {
  return function(rule, props) {
    if (typeof rule !== 'string') {
      const props = rule
      return props.theme[name][props[name]]
    }

    if (props) {
      if (typeof props[name] === 'object') {
        return props[name][rule]
      }

      return props.theme[name][rule]
    }

    return function(rule, props) {
      if (typeof props[name] === 'object') {
        return props[name][rule]
      }

      return props.theme[name][rule]
    }.bind(this, rule)
  }
}

function createStaticRule(name) {
  return function(arg) {
    if (typeof arg === 'string' || arg[name]) {
      return { [name]: arg[name] || arg }
    }

    return null
  }
}

function createBreakpointRule(name) {
  return function(opt, rules, props) {
    if (props) {
      if (typeof props[name] === 'object') {
        return props[name][opt](rules.reduce(ruleReducer(props), {}))
      }
      return props.theme[name][opt](rules.reduce(ruleReducer(props), {}))
    }

    return function(args, props) {
      return props.theme[name][args[0]](args[1].reduce(ruleReducer(props), {}))
    }.bind(this, [opt, rules])
  }
}

function createPseudoRule(name) {
  return function(rules, props) {
    if (props) {
      return {
        [`&:${name}`]: rules.reduce(ruleReducer(props), {})
      }
    }

    return function(args, props) {
      return {
        [`&:${name}`]: args.reduce(ruleReducer(props), {})
      }
    }.bind(this, rules)
  }
}

function ruleReducer(props) {
  return function(obj, rule) {
    if (typeof rule === 'object') {
      return {
        ...obj,
        ...rule
      }
    }
    return {
      ...obj,
      ...rule(props)
    }
  }
}

function combine(name, fn, defaults, overrides, ruleName) {
  return fn(
    {
      ...defaults[name],
      ...overrides[name]
    },
    ruleName || name
  )
}

export function createTheme(defaults, overrides = {}) {
  if (!defaults) {
    throw new Error(
      'createTheme requires a theme to be passed in as the first argument.'
    )
  }

  const combinedTheme = {
    color: combine('color', generateRules, defaults, overrides),
    backgroundColor: combine(
      'color',
      generateRules,
      defaults,
      overrides,
      'backgroundColor'
    ),
    borderColor: combine(
      'color',
      generateRules,
      defaults,
      overrides,
      'borderColor'
    ),
    padding: combine('padding', generateRules, defaults, overrides),
    paddingTop: combine(
      'padding',
      generateRules,
      defaults,
      overrides,
      'paddingTop'
    ),
    paddingRight: combine(
      'padding',
      generateRules,
      defaults,
      overrides,
      'paddingRight'
    ),
    paddingBottom: combine(
      'padding',
      generateRules,
      defaults,
      overrides,
      'paddingBottom'
    ),
    paddingLeft: combine(
      'padding',
      generateRules,
      defaults,
      overrides,
      'paddingLeft'
    ),
    paddingVertical: combine(
      'padding',
      generateVerticalRules,
      defaults,
      overrides
    ),
    paddingHorizontal: combine(
      'padding',
      generateHorizontalRules,
      defaults,
      overrides
    ),
    margin: combine('margin', generateRules, defaults, overrides),
    marginTop: combine(
      'margin',
      generateRules,
      defaults,
      overrides,
      'marginTop'
    ),
    marginRight: combine(
      'margin',
      generateRules,
      defaults,
      overrides,
      'marginRight'
    ),
    marginBottom: combine(
      'margin',
      generateRules,
      defaults,
      overrides,
      'marginBottom'
    ),
    marginLeft: combine(
      'margin',
      generateRules,
      defaults,
      overrides,
      'marginLeft'
    ),
    marginVertical: combine(
      'margin',
      generateVerticalRules,
      defaults,
      overrides
    ),
    marginHorizontal: combine(
      'margin',
      generateHorizontalRules,
      defaults,
      overrides
    ),
    fontSize: combine('fontSize', generateRules, defaults, overrides),
    fontFamily: combine('fontFamily', generateRules, defaults, overrides),
    fontWeight: combine('fontWeight', generateRules, defaults, overrides),
    width: combine('width', generateRules, defaults, overrides),
    minWidth: combine('width', generateRules, defaults, overrides, 'minWidth'),
    maxWidth: combine('width', generateRules, defaults, overrides, 'maxWidth'),
    height: combine('height', generateRules, defaults, overrides),
    minHeight: combine(
      'height',
      generateRules,
      defaults,
      overrides,
      'minHeight'
    ),
    maxHeight: combine(
      'height',
      generateRules,
      defaults,
      overrides,
      'maxHeight'
    ),
    lineHeight: combine('lineHeight', generateRules, defaults, overrides),
    letterSpacing: combine('letterSpacing', generateRules, defaults, overrides),
    borderWidth: combine('borderWidth', generateRules, defaults, overrides),
    borderRadius: combine('borderRadius', generateRules, defaults, overrides),
    opacity: combine('opacity', generateRules, defaults, overrides),
    boxShadow: combine('boxShadow', generateRules, defaults, overrides),
    breakpoint: combine(
      'breakpoint',
      generateBreakpointRules,
      defaults,
      overrides
    )
  }

  return combinedTheme
}

export const color = createRule('color')

export const padding = createRule('padding')
export const paddingTop = createRule('paddingTop')
export const paddingRight = createRule('paddingRight')
export const paddingBottom = createRule('paddingBottom')
export const paddingLeft = createRule('paddingLeft')
export const paddingVertical = createRule('paddingVertical')
export const paddingHorizontal = createRule('paddingHorizontal')

export const margin = createRule('margin')
export const marginTop = createRule('marginTop')
export const marginRight = createRule('marginRight')
export const marginBottom = createRule('marginBottom')
export const marginLeft = createRule('marginLeft')
export const marginVertical = createRule('marginVertical')
export const marginHorizontal = createRule('marginHorizontal')

export const fontSize = createRule('fontSize')
export const fontFamily = createRule('fontFamily')
export const fontWeight = createRule('fontWeight')
export const lineHeight = createRule('lineHeight')
export const letterSpacing = createRule('letterSpacing')
export const fontStyle = createStaticRule('fontStyle')
export const textAlign = createStaticRule('textAlign')
export const textTransform = createStaticRule('textTransform')
export const textDecoration = createStaticRule('textDecoration')

export const width = createRule('width')
export const minWidth = createRule('minWidth')
export const maxWidth = createRule('maxWidth')

export const height = createRule('height')
export const minHeight = createRule('minHeight')
export const maxHeight = createRule('maxHeight')

export const borderWidth = createRule('borderWidth')
export const borderRadius = createRule('borderRadius')
export const borderColor = createRule('borderColor')
export const borderStyle = createStaticRule('borderStyle')

export const opacity = createRule('opacity')

export const boxShadow = createRule('boxShadow')

export const breakpoint = createBreakpointRule('breakpoint')

export const hover = createPseudoRule('hover')
export const active = createPseudoRule('active')
export const focus = createPseudoRule('focus')
export const visited = createPseudoRule('visited')

export const backgroundColor = createRule('backgroundColor')
export const backgroundSize = createStaticRule('backgroundSize')
export const backgroundAttachment = createStaticRule('backgroundAttachment')
export const backgroundPosition = createStaticRule('backgroundPosition')
export const backgroundRepeat = createStaticRule('backgroundRepeat')
export const backgroundImage = createStaticRule('backgroundImage')

export const display = createStaticRule('display')
export const flex = createStaticRule('flex')
export const flexWrap = createStaticRule('flexWrap')
export const flexBasis = createStaticRule('flexBasis')
export const flexGrow = createStaticRule('flexGrow')
export const flexShrink = createStaticRule('flexShrink')
export const flexDirection = createStaticRule('flexDirection')
export const alignItems = createStaticRule('alignItems')
export const alignSelf = createStaticRule('alignSelf')
export const justifyContent = createStaticRule('justifyContent')

export const float = createStaticRule('float')
export const position = createStaticRule('position')
export const overflow = createStaticRule('overflow')
