const backgroundSizes = {
  auto: 'auto',
  cover: 'cover',
  contain: 'contain'
}
const backgroundAttachments = {
  fixed: 'fixed',
  local: 'local',
  scroll: 'scroll'
}
const backgroundPositions = {
  bottom: 'bottom',
  center: 'center',
  left: 'left',
  'left-bottom': 'left bottom',
  'left-top': 'left top',
  right: 'right',
  'right-bottom': 'right bottom',
  'right-top': 'right top',
  top: 'top'
}
const backgroundRepeats = {
  'no-repeat': 'no-repeat',
  repeat: 'repeat',
  'repeat-x': 'repeat-x',
  'repeat-y': 'repeat-y'
}
const setupBackgroundColors = (background, colors) => {
  for (const [key, value] of Object.entries(colors)) {
    background[key] = {
      'background-color': value
    }
  }
}

const setupBackgroundProperties = (background, values, name, valTransform) => {
  for (const [key, value] of Object.entries(values)) {
    const val = valTransform ? valTransform(value) : value
    background[key] = {
      [`background-${name}`]: val
    }
  }
}

const setupBackground = ({sizes = {}} = {}, colors = {}) => {
  let background = {}
  setupBackgroundProperties(background, {...backgroundSizes, ...sizes}, 'size')
  setupBackgroundProperties(background, backgroundAttachments, 'attachment')
  setupBackgroundProperties(background, backgroundPositions, 'position')
  setupBackgroundProperties(background, backgroundRepeats, 'repeat')
  setupBackgroundColors(background, colors)
  
  return background
}

export default setupBackground
