# Layout

---

## Rules

```js
layout.display.block
layout.display.inlineBlock
layout.display.flex
layout.display.inlineFlex

layout.float.left
layout.float.right
layout.float.none

layout.position.fixed
layout.position.static
layout.position.relative
layout.position.absolute
layout.position.sticky

layout.overflow.hidden
layout.overflow.visible
layout.overflow.scroll
layout.overflow.auto

layout.direction.row
layout.direction.rowReverse
layout.direction.column
layout.direction.columnReverse

layout.alignItems.start
layout.alignItems.end
layout.alignItems.stretch
layout.alignItems.center
layout.alignItems.baseline

layout.wrap.noWrap
layout.wrap.wrap
layout.wrap.reverse

layout.alignContent.start
layout.alignContent.end
layout.alignContent.center
layout.alignContent.between
layout.alignContent.around

layout.alignSelf.start
layout.alignSelf.end
layout.alignSelf.stretch
layout.alignSelf.center
layout.alignSelf.auto

layout.justifyContent.start
layout.justifyContent.end
layout.justifyContent.center
layout.justifyContent.between
layout.justifyContent.around
```

## Defaults

```js
{
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
```
