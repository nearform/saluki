export const defaultRules = {
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
    view: '100vw',
    auto: 'auto'
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
