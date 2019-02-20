export const defaultRules = {
  size: {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  },
  weight: {
    thin: '200',
    normal: 'normal',
    bold: 'bold'
  },
  align: {
    center: 'center',
    left: 'left',
    right: 'right',
    justify: 'justify'
  },
  transform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    none: 'none'
  },
  style: {
    normal: 'normal',
    italic: 'italic',
    oblique: 'oblique'
  },
  decoration: {
    underline: 'underline',
    lineThrough: 'line-through',
    none: 'none'
  },
  lineHeight: {
    small: '1em',
    medium: '1.5em',
    large: '2em'
  },
  letterSpacing: {
    small: '-.05em',
    medium: '.125em',
    large: '.2em'
  },
  sans: 'sans',
  serif: 'serif'
}

export function combineRules(
  defaultRules,
  customRules = {
    size: {},
    weight: {},
    align: {},
    transform: {},
    style: {},
    decoration: {},
    lineHeight: {},
    letterSpacing: {}
  }
) {
  return {
    ...defaultRules,
    ...customRules,
    size: {
      ...defaultRules.size,
      ...customRules.size
    },
    weight: {
      ...defaultRules.weight,
      ...customRules.weight
    },
    align: {
      ...defaultRules.align,
      ...customRules.align
    },
    transform: {
      ...defaultRules.transform,
      ...customRules.transform
    },
    style: {
      ...defaultRules.style,
      ...customRules.style
    },
    decoration: {
      ...defaultRules.decoration,
      ...customRules.decoration
    },
    lineHeight: {
      ...defaultRules.lineHeight,
      ...customRules.lineHeight
    },
    letterSpacing: {
      ...defaultRules.letterSpacing,
      ...customRules.letterSpacing
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

function generateFamilyRules(rule) {
  return {
    'font-family': rule
  }
}

export default function(rules) {
  return {
    size: generateRules(rules.size, 'font-size'),
    weight: generateRules(rules.weight, 'font-weight'),
    align: generateRules(rules.align, 'text-align'),
    transform: generateRules(rules.transform, 'text-transform'),
    style: generateRules(rules.style, 'font-style'),
    decoration: generateRules(rules.decoration, 'text-decoration'),
    lineHeight: generateRules(rules.lineHeight, 'line-height'),
    letterSpacing: generateRules(rules.letterSpacing, 'letter-spacing'),
    sans: generateFamilyRules(rules.sans),
    serif: generateFamilyRules(rules.serif)
  }
}
