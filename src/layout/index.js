export const defaultRules = {
  display: {
    flex: 'flex',
    inlineFlex: 'inline-flex',
    block: 'block',
    inlineBlock: 'inline-block'
  },
  flex: {
    grow: 1,
    noGrow: 0,
    shrink: 1,
    noShrink: 0,
    none: 'none',
    one: '1',
    auto: 'auto',
    initial: 'initial'
  },
  float: {
    left: 'left',
    right: 'right',
    none: 'none'
  },
  position: {
    fixed: 'fixed',
    static: 'static',
    relative: 'relative',
    absolute: 'absolute',
    sticky: 'sticky'
  },
  overflow: {
    hidden: 'hidden',
    visible: 'visible',
    scroll: 'scroll',
    auto: 'auto'
  },
  direction: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse'
  },
  alignItems: {
    start: 'flex-start',
    end: 'flex-end',
    stretch: 'stretch',
    center: 'center',
    baseline: 'baseline'
  },
  wrap: {
    noWrap: 'nowrap',
    wrap: 'wrap',
    reverse: 'wrap-reverse'
  },
  alignContent: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around'
  },
  alignSelf: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    auto: 'auto',
    stretch: 'stretch'
  },
  justifyContent: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around'
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

function generateFlexRules(rules) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    if (key === 'grow' || key === 'noGrow') {
      newRules[key] = {
        'flex-grow': value
      }
    } else if (key === 'shrink' || key === 'noShrink') {
      newRules[key] = {
        'flex-shrink': value
      }
    } else {
      newRules[key] = {
        flex: value
      }
    }
  }

  return newRules
}

export default function(rules) {
  return {
    display: generateRules(rules.display, 'display'),
    flex: generateFlexRules(rules.flex),
    float: generateRules(rules.float, 'float'),
    position: generateRules(rules.position, 'position'),
    overflow: generateRules(rules.overflow, 'overflow'),
    direction: generateRules(rules.direction, 'flex-direction'),
    alignItems: generateRules(rules.alignItems, 'align-items'),
    wrap: generateRules(rules.wrap, 'flex-wrap'),
    alignContent: generateRules(rules.alignContent, 'align-content'),
    alignSelf: generateRules(rules.alignSelf, 'align-self'),
    justifyContent: generateRules(rules.justifyContent, 'justify-content')
  }
}
