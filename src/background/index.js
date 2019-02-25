export const defaultRules = {
  size: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain'
  },
  attachment: {
    fixed: 'fixed',
    local: 'local',
    scroll: 'scroll'
  },
  position: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    bottomLeft: 'left bottom',
    topLeft: 'left top',
    right: 'right',
    bottomRight: 'right bottom',
    topRight: 'right top',
    top: 'top'
  },
  repeat: {
    none: 'no-repeat',
    repeat: 'repeat',
    repeatX: 'repeat-x',
    repeatY: 'repeat-y'
  }
}

export function combineRules(defaultRules, customRules, color) {
  return {
    ...defaultRules,
    ...customRules,
    size: defaultRules.size,
    attachment: defaultRules.attachment,
    position: defaultRules.position,
    repeat: defaultRules.repeat,
    color
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

function url(url) {
  return {
    'background-image': `url(${url})`
  }
}

export default function(rules) {
  return {
    size: generateRules(rules.size, 'background-size'),
    attachment: generateRules(rules.attachment, 'background-attachment'),
    position: generateRules(rules.position, 'background-position'),
    repeat: generateRules(rules.repeat, 'background-repeat'),
    color: generateRules(rules.color, 'background'),
    url
  }
}
