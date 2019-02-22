export const defaultRules = {
  display: {
    flex: 'flex',
    inlineFlex: 'inline-flex',
    block: 'block',
    inlineBlock: 'inline-block'
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

export default function(rules) {
  return {
    display: generateRules(rules.display, 'display'),
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
