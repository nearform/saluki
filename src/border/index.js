const borderWidths = { none: 0, thin: 1, medium: 2, thick: 4, extraThick: 8 }
const borderStyles = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  none: 'none'
}

const setupBorderColors = (border, colors) => {
  for (const [key, value] of Object.entries(colors)) {
    border[key] = {
      'border-color': value
    }
    border['top'][key] = {
      'border-top-color': value
    }
    border['right'][key] = {
      'border-right-color': value
    }
    border['bottom'][key] = {
      'border-bottom-color': value
    }
    border['left'][key] = {
      'border-left-color': value
    }
  }
}

const setupBorderProperties = (border, values, name, valTransform) => {
  for (const [key, value] of Object.entries(values)) {
    const val = valTransform ? valTransform(value) : value
    border[key] = {
      [`border-${name}`]: val
    }
    border['top'][key] = { [`border-top-${name}`]: val }
    border['right'][key] = { [`border-right-${name}`]: val }
    border['bottom'][key] = { [`border-bottom-${name}`]: val }
    border['left'][key] = { [`border-left-${name}`]: val }
  }
}
const setupBorder = (customWidths = {}, colors = {}) => {
  let border = {
    border: 'solid 1px black',
    top: { ...borderStyles },
    right: { ...borderStyles },
    bottom: { ...borderStyles },
    left: { ...borderStyles }
  }
  setupBorderColors(border, colors)
  setupBorderProperties(
    border,
    { ...borderWidths, ...customWidths },
    'width',
    v => `${v}px`
  )
  setupBorderProperties(border, borderStyles, 'style')
  return border
}

export default setupBorder
