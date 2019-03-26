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

function combine(name, fn, overrides, ruleName) {
  const defaults = {
    color: {
      black: 'black',
      white: 'white',
      lighterGray: '#d5d9dc',
      lightGray: '#9ea6ae',
      gray: '#495057',
      darkGray: '#3a4045',
      darkerGray: '#23262a',
      lighterRed: '#f9b8b8',
      lightRed: '#f25959',
      red: '#f03e3e',
      darkRed: '#a60d0d',
      darkerRed: '#470606',
      lighterBlue: '#bbdaf6',
      lightBlue: '#61a9ea',
      blue: '#1c7ed6',
      darkBlue: '#155d9e',
      darkerBlue: '#092844',
      lighterYellow: '#ffe4b3',
      lightYellow: '#ffc04d',
      yellow: '#f59f00',
      darkYellow: '#b37400',
      darkerYellow: '#4d3200',
      lighterGreen: '#c5edcc',
      lightGreen: '#77d587',
      green: '#37b24d',
      darkGreen: '#2a883b',
      darkerGreen: '#123a19',
      lighterOrange: '#fdd2b5',
      lightOrange: '#fa9551',
      orange: '#f76707',
      darkOrange: '#ae4805',
      darkerOrange: '#4a1f02',
      lighterPurple: '#e6c3ee',
      lightPurple: '#c474d8',
      purple: '#ae3ec9',
      darkPurple: '#78278b',
      darkerPurple: '#33113c'
    },
    padding: {
      none: '0',
      auto: 'auto',
      small: '1rem',
      medium: '2rem',
      large: '4rem'
    },
    margin: {
      none: '0',
      auto: 'auto',
      small: '1rem',
      medium: '2rem',
      large: '4rem'
    },
    breakpoint: {
      notSmall: { min: '576px' },
      medium: { min: '768px', max: '991px' },
      large: { min: '992px' }
    },
    fontSize: {
      small: '1rem',
      medium: '1.25rem',
      large: '2.5rem'
    },
    fontFamily: {
      sans:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      serif: 'Georgia, Times, Times New Roman, serif'
    },
    fontWeight: {
      thin: '200',
      normal: 'normal',
      bold: '700'
    },
    width: {
      fifth: '20%',
      twoFifths: '40%',
      threeFifths: '60%',
      fourFifths: '80%',
      quarter: '25%',
      threeQuarters: '75%',
      third: '33.3333333333%',
      twoThirds: '66.6666666666%',
      half: '50%',
      full: '100%',
      view: '100vw',
      auto: 'auto'
    },
    height: {
      small: '2rem',
      medium: '4rem',
      large: '8rem',
      quarter: '25%',
      half: '50%',
      threeQuarters: '75%',
      full: '100%',
      view: '100vh',
      auto: 'auto'
    },
    lineHeight: {
      none: '1',
      small: '1.25',
      medium: '1.5',
      large: '2'
    },
    letterSpacing: {
      small: '-.05em',
      none: '0',
      medium: '.025em',
      large: '.05em'
    },
    borderWidth: {
      none: 'none',
      thin: '1px',
      medium: '2px',
      thick: '4px',
      extraThick: '8px'
    },
    borderRadius: {
      none: 0,
      small: '.125rem',
      medium: '.25rem',
      large: '.5rem',
      round: '9999px'
    },
    opacity: {
      full: 1,
      half: 0.5,
      none: 0,
      inherit: 'inherit'
    },
    boxShadow: {
      small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      medium: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      large: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  }

  return fn(
    {
      ...defaults[name],
      ...overrides[name]
    },
    ruleName || name
  )
}

export function theme(overrides = {}) {
  const combinedTheme = {
    color: combine('color', generateRules, overrides),
    backgroundColor: combine(
      'color',
      generateRules,
      overrides,
      'backgroundColor'
    ),
    borderColor: combine('color', generateRules, overrides, 'borderColor'),
    padding: combine('padding', generateRules, overrides),
    paddingTop: combine('padding', generateRules, overrides, 'paddingTop'),
    paddingRight: combine('padding', generateRules, overrides, 'paddingRight'),
    paddingBottom: combine(
      'padding',
      generateRules,
      overrides,
      'paddingBottom'
    ),
    paddingLeft: combine('padding', generateRules, overrides, 'paddingLeft'),
    paddingVertical: combine('padding', generateVerticalRules, overrides),
    paddingHorizontal: combine('padding', generateHorizontalRules, overrides),
    margin: combine('margin', generateRules, overrides),
    marginTop: combine('margin', generateRules, overrides, 'marginTop'),
    marginRight: combine('margin', generateRules, overrides, 'marginRight'),
    marginBottom: combine('margin', generateRules, overrides, 'marginBottom'),
    marginLeft: combine('margin', generateRules, overrides, 'marginLeft'),
    marginVertical: combine('margin', generateVerticalRules, overrides),
    marginHorizontal: combine('margin', generateHorizontalRules, overrides),
    fontSize: combine('fontSize', generateRules, overrides),
    fontFamily: combine('fontFamily', generateRules, overrides),
    fontWeight: combine('fontWeight', generateRules, overrides),
    width: combine('width', generateRules, overrides),
    minWidth: combine('width', generateRules, overrides, 'minWidth'),
    maxWidth: combine('width', generateRules, overrides, 'maxWidth'),
    height: combine('height', generateRules, overrides),
    minHeight: combine('height', generateRules, overrides, 'minHeight'),
    maxHeight: combine('height', generateRules, overrides, 'maxHeight'),
    lineHeight: combine('lineHeight', generateRules, overrides),
    letterSpacing: combine('letterSpacing', generateRules, overrides),
    borderWidth: combine('borderWidth', generateRules, overrides),
    borderRadius: combine('borderRadius', generateRules, overrides),
    opacity: combine('opacity', generateRules, overrides),
    boxShadow: combine('boxShadow', generateRules, overrides),
    breakpoint: combine('breakpoint', generateBreakpointRules, overrides)
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
