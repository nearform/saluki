export const defaultRules = {
  none: '0',
  auto: 'auto',
  small: '1rem',
  medium: '2rem',
  large: '4rem'
}

export function combineRules(
  defaultRules,
  customRules = { padding: {}, margin: {} }
) {
  return {
    padding: {
      ...defaultRules,
      ...customRules.padding,
      top: {
        ...defaultRules,
        ...customRules.padding
      },
      right: {
        ...defaultRules,
        ...customRules.padding
      },
      bottom: {
        ...defaultRules,
        ...customRules.padding
      },
      left: {
        ...defaultRules,
        ...customRules.padding
      },
      vertical: {
        ...defaultRules,
        ...customRules.padding
      },
      horizontal: {
        ...defaultRules,
        ...customRules.padding
      }
    },
    margin: {
      ...defaultRules,
      ...customRules.margin,
      top: {
        ...defaultRules,
        ...customRules.margin
      },
      right: {
        ...defaultRules,
        ...customRules.margin
      },
      bottom: {
        ...defaultRules,
        ...customRules.margin
      },
      left: {
        ...defaultRules,
        ...customRules.margin
      },
      vertical: {
        ...defaultRules,
        ...customRules.margin
      },
      horizontal: {
        ...defaultRules,
        ...customRules.margin
      }
    }
  }
}

function generateRules(rules, cssProp) {
  const newRules = {
    top: {},
    right: {},
    bottom: {},
    left: {},
    vertical: {},
    horizontal: {}
  }

  for (const [key, value] of Object.entries(rules)) {
    if (
      key === 'top' ||
      key === 'right' ||
      key === 'bottom' ||
      key === 'left'
    ) {
      for (const [k, v] of Object.entries(rules[key])) {
        newRules[key][k] = {
          [`${cssProp}-${key}`]: v
        }
      }
    } else if (key === 'vertical') {
      for (const [k, v] of Object.entries(rules[key])) {
        newRules[key][k] = {
          [`${cssProp}-top`]: v,
          [`${cssProp}-bottom`]: v
        }
      }
    } else if (key === 'horizontal') {
      for (const [k, v] of Object.entries(rules[key])) {
        newRules[key][k] = {
          [`${cssProp}-right`]: v,
          [`${cssProp}-left`]: v
        }
      }
    } else {
      newRules[key] = {
        [cssProp]: value
      }
    }
  }

  return newRules
}

export default function(spacing) {
  return {
    padding: generateRules(spacing.padding, 'padding'),
    margin: generateRules(spacing.margin, 'margin')
  }
}
