const generateRules = (customRules, type) => {
  const defaultRules = {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  }

  const combinedRules = {
    ...defaultRules,
    ...customRules,
    top: {
      ...defaultRules,
      ...customRules
    },
    right: {
      ...defaultRules,
      ...customRules
    },
    bottom: {
      ...defaultRules,
      ...customRules
    },
    left: {
      ...defaultRules,
      ...customRules
    },
    vertical: {
      ...defaultRules,
      ...customRules
    },
    horizontal: {
      ...defaultRules,
      ...customRules
    }
  }

  const newRules = {
    top: {},
    right: {},
    bottom: {},
    left: {},
    vertical: {},
    horizontal: {}
  }

  for (const [key, value] of Object.entries(combinedRules)) {
    if (
      key === 'top' ||
      key === 'right' ||
      key === 'bottom' ||
      key === 'left'
    ) {
      for (const [k, v] of Object.entries(combinedRules[key])) {
        newRules[key][k] = {
          [`${type}-${key}`]: v
        }
      }
    } else if (key === 'vertical') {
      for (const [k, v] of Object.entries(combinedRules[key])) {
        newRules[key][k] = {
          [`${type}-top`]: v,
          [`${type}-bottom`]: v
        }
      }
    } else if (key === 'horizontal') {
      for (const [k, v] of Object.entries(combinedRules[key])) {
        newRules[key][k] = {
          [`${type}-right`]: v,
          [`${type}-left`]: v
        }
      }
    } else {
      newRules[key] = {
        [type]: value
      }
    }
  }

  return newRules
}

export default function(customSpacing = {}) {
  return {
    padding: generateRules(customSpacing.padding, 'padding'),
    margin: generateRules(customSpacing.margin, 'margin')
  }
}
