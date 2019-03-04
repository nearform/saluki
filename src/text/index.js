export const defaultRules = {
  family: {
    sans:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    serif: 'Georgia, Times, Times New Roman, serif'
  },
  size: {
    small: '1rem',
    medium: '1.25rem',
    large: '2.5rem'
  },
  weight: {
    thin: '200',
    normal: 'normal',
    bold: '700'
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
  }
}

export function combineRules(
  defaultRules,
  customRules = {
    family: {},
    size: {},
    weight: {},
    align: {},
    lineHeight: {},
    letterSpacing: {}
  }
) {
  return {
    family: {
      ...defaultRules.family,
      ...customRules.family
    },
    size: {
      ...defaultRules.size,
      ...customRules.size
    },
    weight: {
      ...defaultRules.weight,
      ...customRules.weight
    },
    lineHeight: {
      ...defaultRules.lineHeight,
      ...customRules.lineHeight
    },
    letterSpacing: {
      ...defaultRules.letterSpacing,
      ...customRules.letterSpacing
    },
    transform: defaultRules.transform,
    style: defaultRules.style,
    decoration: defaultRules.decoration,
    align: defaultRules.align
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
    family: generateRules(rules.family, 'font-family'),
    size: generateRules(rules.size, 'font-size'),
    weight: generateRules(rules.weight, 'font-weight'),
    align: generateRules(rules.align, 'text-align'),
    transform: generateRules(rules.transform, 'text-transform'),
    style: generateRules(rules.style, 'font-style'),
    decoration: generateRules(rules.decoration, 'text-decoration'),
    lineHeight: generateRules(rules.lineHeight, 'line-height'),
    letterSpacing: generateRules(rules.letterSpacing, 'letter-spacing')
  }
}
