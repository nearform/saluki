export const defaultRules = {
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    none: 'none'
  },
  width: {
    none: 'none',
    thin: '1px',
    medium: '2px',
    thick: '4px',
    extraThick: '8px'
  },
  radius: {
    small: '2px',
    medium: '4px',
    large: '6px'
  }
}

export function combineRules(
  defaultRules,
  customRules = {
    width: {},
    radius: {}
  },
  color
) {
  return {
    ...defaultRules,
    ...customRules,
    style: defaultRules.style,
    width: {
      ...defaultRules.width,
      ...customRules.width
    },
    radius: {
      ...defaultRules.radius,
      ...customRules.radius
    },
    color
  }
}

function generateRules(rules, cssProp) {
  console.log('rrrrr', rules, cssProp)
  const newRules =
    cssProp === 'radius'
      ? {
          topRight: {},
          bottomRight: {},
          topLeft: {},
          bottomLeft: {}
        }
      : {
          top: {},
          right: {},
          bottom: {},
          left: {}
        }

  for (const [key, value] of Object.entries(rules)) {
    newRules[key] = {
      [`border-${cssProp}`]: value
    }
    if (cssProp === 'radius') {
      newRules.topRight[key] = { [`border-top-right-${cssProp}`]: value }
      newRules.bottomRight[key] = { [`border-bottom-right-${cssProp}`]: value }
      newRules.topLeft[key] = { [`border-top-left-${cssProp}`]: value }
      newRules.bottomLeft[key] = { [`border-bottom-left-${cssProp}`]: value }
    } else {
      newRules.top[key] = { [`border-top-${cssProp}`]: value }
      newRules.right[key] = { [`border-right-${cssProp}`]: value }
      newRules.bottom[key] = { [`border-bottom-${cssProp}`]: value }
      newRules.left[key] = { [`border-left-${cssProp}`]: value }
    }
  }

  return newRules
}

export default function(rules) {
  console.log(rules)
  return {
    style: generateRules(rules.style, 'style'),
    width: generateRules(rules.width, 'width'),
    radius: generateRules(rules.radius, 'radius'),
    color: generateRules(rules.color, 'color')
  }
}
