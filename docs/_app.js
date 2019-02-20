/* eslint-disable no-unused-vars */
import React from 'react'
import { SidebarLayout } from '@compositor/x0/components'
/* eslint-enable no-unused-vars */
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
  'text',
  'text-color',
  'family',
  'size',
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
  'border',
  'border-color',
  'width',
  'style',
  'background',
  'background-color'
]

const pageNames = {
  index: 'Home',
  'getting-started': 'Getting Started',
  'styled-components': 'Styled Components',
  'responsive-design': 'Responsive Design',
  'text-color': 'Color',
  'text-style': 'Style',
  'line-height': 'Line Height',
  'letter-spacing': 'Letter Spacing',
  'border-color': 'Color',
  'background-color': 'Color'
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
