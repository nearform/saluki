export const defaultRules = {
  width: {
    sixth: '16.6666666667%',
    fifth: '20%',
    quarter: '25%',
    third: '33.3333333333%',
    half: '50%',
    full: '100%',
    view: '100vw'
  },
  height: {
    small: '1rem',
    medium: '3rem',
    large: '6rem'
  }
}

export function combineRules(
  defaultRules,
  customRules = {
    width: {},
    height: {}
  }
) {
  return {
    width: {
      ...defaultRules.width,
      ...customRules.width
    },
    height: {
      ...defaultRules.height,
      ...customRules.height
    }
  }
}

function generateRules(rules, cssProp) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    newRules[key] = {
      [cssProp]: value
    }
  }

  return newRules
}

export default function(rules) {
  return {
    width: generateRules(rules.width, 'width'),
    height: generateRules(rules.height, 'height')
  }
}
