import React from 'react'
import { SidebarLayout } from '@compositor/x0/components'
import sortBy from 'lodash.sortby'

const navOrder = [
  'index',
  'getting-started',
  'configuration',
  'defaults',
  'overrides',
  'additions',
  'styled-components',
  'emotion',
  'props',
  'color',
  'responsive-design',
  'layout',
  'display',
  'float',
  'position',
  'overflow',
  'direction',
  'align-items',
  'wrap',
  'align-content',
  'align-self',
  'justify-content',
  'size',
  'width',
  'height',
  'text',
  'text-color',
  'family',
  'text-size',
  'weight',
  'align',
  'transform',
  'text-style',
  'decoration',
  'line-height',
  'letter-spacing',
  'spacing',
  'padding',
  'margin',
  'psuedo',
  'border',
  'border-color',
  'border-width',
  'style',
  'radius',
  'background',
  'background-color',
  'image',
  'background-size',
  'attachment',
  'background-position',
  'repeat',
  'opacity',
  'shadow'
]

const pageNames = {
  index: 'Home',
  'getting-started': 'Getting Started',
  'styled-components': 'Styled Components',
  'responsive-design': 'Responsive Design',
  'align-items': 'Align Items',
  'align-content': 'Align Content',
  'align-self': 'Align Self',
  'justify-content': 'Justify Content',
  'text-color': 'Color',
  'text-style': 'Style',
  'text-size': 'Size',
  'line-height': 'Line Height',
  'letter-spacing': 'Letter Spacing',
  'border-color': 'Color',
  'border-width': 'Width',
  'background-color': 'Color',
  'background-size': 'Size',
  'background-position': 'Position',
  psuedo: 'Psuedo Classes'
}

export default props => {
  const sortedRoutes = routes =>
    [
      ...sortBy([...routes], a => {
        const i = navOrder.indexOf(a.name)
        return i < 0 ? Infinity : i
      })
    ].map(route => {
      if (!pageNames[route.name]) return route
      return {
        ...route,
        name: pageNames[route.name]
      }
    })

  const r = sortedRoutes(props.routes)

  return <SidebarLayout title={'Cijul'} {...props} routes={r} />
}
