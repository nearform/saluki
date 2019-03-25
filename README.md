<h1 align="center">Saluki</h1>

<div align="center">

Utility based CSS-in-JS theming.

[![Coverage Status](https://img.shields.io/coveralls/nearform/saluki/master.svg?style=flat)](https://coveralls.io/github/nearform/saluki?branch=master) [![CircleCI Status](https://circleci.com/gh/nearform/saluki.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/nearform/saluki) [![Minified & gzipped size](https://img.shields.io/bundlephobia/minzip/saluki.svg)](https://bundlephobia.com/result?p=saluki) [![npm version](https://img.shields.io/npm/v/saluki.svg?style=flat)](https://www.npmjs.com/package/saluki) [![Dependencies](https://img.shields.io/david/nearform/saluki.svg)](https://www.npmjs.com/package/saluki)

> **_Please note:_** breaking changes are expected in these early stages whilst we settle on the best API possible.
>
> Check [Saluki's issues](https://github.com/nearform/saluki/issues) for discussions on potential changes or feel free to raise your own.

</div>

Saluki works alongside CSS-in-JS theming solutions to allow rapid UI development with out of the box defaults and an intuitive API.

## Features

- ✂️ Zero config - provides a robust default theme for rapid initial setup.
- ⚙️ Built to configure - the default theme can be overridden or extended as desired.
- 📚 Library agnostic - works alongside CSS-in-JS theming solutions such as those provided by Styled Components and Emotion.
- 🤷‍ Unopinionated - no prescribed look or feel, simply building block to create your own.
- 🐭 Tiny footprint - less than 3KB minified & gzipped.

## Usage

Install Saluki as a development dependency.

```sh
npm install --save-dev saluki
```

Pass Saluki's default theme into your `<ThemeProvider />`.

```js
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { theme } from 'saluki'

export const App = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
```

Create visual primitives using your favorite CSS-in-JS solution and use them in your React components.

### Styled Components

```jsx
import React from 'react'
import styled from 'styled-components/macro'
import { color, fontSize } from 'saluki'

const StyledHeader = styled.h1`
  ${color('red')}
  ${fontSize('large')}
`

export const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>
```

### Emotion

When using Emotion's CSS prop you need to pass in your theme as the final argument to any Saluki helper.

```jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { color, fontSize } from 'saluki'

export const Header = ({ children }) => (
  <h1
    css={theme => css`
      ${color('red', theme)}
      ${fontSize('large', theme)}
    `}
  >
    {children}
  </h1>
)
```

## Resources

* [Starter example (CodeSandbox)](https://codesandbox.io/s/7kylv2nmr1)
* [Buttons example (CodeSandbox)](https://codesandbox.io/s/mmjw3p6zj9)
* [Responsive grid example (CodeSandbox)](https://codesandbox.io/s/5x9pv13pkk)
* [Responsive card example (CodeSandbox)](https://codesandbox.io/s/zq8r11qvox)
* [Styled Components usage examples (CodeSandbox)](https://codesandbox.io/s/882wx3oq9j)
* [Emotion usage examples (CodeSandbox)](https://codesandbox.io/s/oo2m65wo4q)

## Configuration

Saluki doesn't need any configuration to get started.

It is, however, fairly inevitable that you'll want to provide your own custom theming for certain rules.

You can do this by passing a custom config object into the `theme` function exported from Saluki.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { theme } from 'saluki'

const customConfig = {
  color: {
    red: '#bd0000'
  }
}

export const App = ({ children }) => (
  <ThemeProvider theme={theme(customConfig)}>{children}</ThemeProvider>
)
```

## Using Props

You can pass values via props from your React components to create highly reusable styled components.

```jsx
import React from 'react'
import styled from 'styled-components/macro'
import { color, fontSize } from 'saluki'

const StyledHeader = styled.h1`
  ${color}
  ${fontSize}
`

export const Header = ({ children }) => (
  <StyledHeader color="red" fontSize="large">
    {children}
  </StyledHeader>
)
```

Alternatively, if you don't want a 1-to-1 mapping of props to Saluki styles you can use props to apply conditional styling.

```jsx
import React, { Fragment } from 'react'
import styled from 'styled-components/macro'
import { color, backgroundColor } from 'saluki'

const StyledHeader = styled.h1`
  ${props => (props.invert ? color('white') : color('black'))}
  ${props => props.invert && backgroundColor('black')}
`

export const Header = ({ children }) => (
  <Fragment>
    <StyledHeader>{children}</StyledHeader>
    <StyledHeader invert>{children}</StyledHeader>
  </Fragment>
)
```

## Responsive Variants

Saluki provides responsive rules via `breakpoint`. The function takes the rule name as the first argument and an array of rules as the second.

```jsx
import React from 'react'
import styled from 'styled-components/macro'
import { breakpoint, color, fontSize } from 'saluki'

const StyledHeader = styled.h1`
  ${color('red')}
  ${fontSize('medium')}
  ${breakpoint('large', [fontSize('large')])}
`

export const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>
```

When creating custom breakpoint rules you need to provider either a min, max or both values.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { theme } from 'saluki'

const customConfig = {
  breakpoint: {
    xl: {
      min: '1200px',
      max: '1500px'
    },
    xxl: {
      min: '1501px'
    }
  }
}

export const App = ({ children }) => (
  <ThemeProvider theme={theme(customConfig)}>{children}</ThemeProvider>
)
```

## Pseudo Rules

Pseudo rules such as hover, active and focus can be passed an array of rules to apply.

```jsx
import React from 'react'
import styled from 'styled-components/macro'
import { color, hover } from 'saluki'

const StyledHeader = styled.h1`
  ${color('red')}
  ${hover([color('green')])}
`

export const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>
```

## Object Literals

When using object literals you need to pass in props as the final argument to any Saluki function.

```jsx
import React from 'react'
import styled from 'styled-components/macro'
import { breakpoint, color, fontSize } from 'saluki'

const StyledHeader = styled.h1(props => ({
  ...color('red', props),
  ...fontSize('medium', props),
  ...breakpoint('large', [fontSize('large')], props)
}))

export const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>
```

## API

### Configurable Rules

Configurable rules can be overridden or added to via Saluki's `theme` function.

<table>
  <tr>
    <th align='left'>Rule</th>
    <th align='left'>Defaults</th>
  </tr>
  <tr>
    <td>color</td>
    <td><pre><code>{
  black: 'black',
  white: 'white',
  lighterGray: '#d5d9dc',
  lightGray: '#9ea6ae',
  gray: '#495057',
  darkGray: '#3a4045',
  darkerGray: '#23262a',
  lighterRed: '#f9b8b8',
  lightRed: '#f25959',
  red: '#f03e3e',
  darkRed: '#a60d0d',
  darkerRed: '#470606',
  lighterBlue: '#bbdaf6',
  lightBlue: '#61a9ea',
  blue: '#1c7ed6',
  darkBlue: '#155d9e',
  darkerBlue: '#092844',
  lighterYellow: '#ffe4b3',
  lightYellow: '#ffc04d',
  yellow: '#f59f00',
  darkYellow: '#b37400',
  darkerYellow: '#4d3200',
  lighterGreen: '#c5edcc',
  lightGreen: '#77d587',
  green: '#37b24d',
  darkGreen: '#2a883b',
  darkerGreen: '#123a19',
  lighterOrange: '#fdd2b5',
  lightOrange: '#fa9551',
  orange: '#f76707',
  darkOrange: '#ae4805',
  darkerOrange: '#4a1f02',
  lighterPurple: '#e6c3ee',
  lightPurple: '#c474d8',
  purple: '#ae3ec9',
  darkPurple: '#78278b',
  darkerPurple: '#33113c'
}</code></pre></td>
  </tr>
  <tr>
    <td>backgroundColor</td>
    <td>Inherited from color</td>
  </tr>
  <tr>
    <td>borderColor</td>
    <td>Inherited from color</td>
  </tr>
  <tr>
    <td>breakpoint</td>
    <td><pre><code>{
  notSmall: { min: '576px' },
  medium: { min: '768px', max: '991px' },
  large: { min: '992px' }
}</code></pre></td>
  </tr>
  <tr>
    <td>padding</td>
    <td><pre><code>{
  none: '0',
  auto: 'auto',
  small: '1rem',
  medium: '2rem',
  large: '4rem'
}</code></pre></td>
  </tr>
  <tr>
    <td>paddingVertical</td>
    <td>Inherited from padding</td>
  </tr>
  <tr>
    <td>paddingHorizontal</td>
    <td>Inherited from padding</td>
  </tr>
  <tr>
    <td>paddingTop</td>
    <td>Inherited from padding</td>
  </tr>
  <tr>
    <td>paddingRight</td>
    <td>Inherited from padding</td>
  </tr>
  <tr>
    <td>paddingBottom</td>
    <td>Inherited from padding</td>
  </tr>
  <tr>
    <td>paddingLeft</td>
    <td>Inherited from padding</td>
  </tr>
  <tr>
    <td>margin</td>
    <td><pre><code>{
  none: '0',
  auto: 'auto',
  small: '1rem',
  medium: '2rem',
  large: '4rem'
}</code></pre></td>
  </tr>
  <tr>
    <td>marginVertical</td>
    <td>Inherited from margin</td>
  </tr>
  <tr>
    <td>marginHorizontal</td>
    <td>Inherited from margin</td>
  </tr>
  <tr>
    <td>marginTop</td>
    <td>Inherited from margin</td>
  </tr>
  <tr>
    <td>marginRight</td>
    <td>Inherited from margin</td>
  </tr>
  <tr>
    <td>marginBottom</td>
    <td>Inherited from margin</td>
  </tr>
  <tr>
    <td>marginLeft</td>
    <td>Inherited from margin</td>
  </tr>
  <tr>
    <td>fontSize</td>
    <td><pre><code>{
  small: '1rem',
  medium: '1.25rem',
  large: '2.5rem'
}</code></pre></td>
  </tr>
    <tr>
    <td>fontFamily</td>
    <td><pre><code>{
  sans:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji',
  serif: 'Georgia, Times, Times New Roman, serif'
}</code></pre></td>
  </tr>
    <tr>
    <td>fontWeight</td>
    <td><pre><code>{
  thin: '200',
  normal: 'normal',
  bold: '700'
}</code></pre></td>
  </tr>
  <tr>
    <td>lineHeight</td>
    <td><pre><code>{
  none: '1',
  small: '1.25',
  medium: '1.5',
  large: '2'
}</code></pre></td>
  </tr>
  <tr>
    <td>letterSpacing</td>
    <td><pre><code>{
  small: '-.05em',
  none: '0',
  medium: '.025em',
  large: '.05em'
}</code></pre></td>
  </tr>
  <tr>
    <td>width</td>
    <td><pre><code>{
  fifth: '20%',
  twoFifths: '40%',
  threeFifths: '60%',
  fourFifths: '80%',
  quarter: '25%',
  threeQuarters: '75%',
  third: '33.3333333333%',
  twoThirds: '66.6666666666%',
  half: '50%',
  full: '100%',
  view: '100vw',
  auto: 'auto'
}</code></pre></td>
  </tr>
  <tr>
    <td>height</td>
    <td><pre><code>{
  small: '2rem',
  medium: '4rem',
  large: '8rem',
  quarter: '25%',
  half: '50%',
  threeQuarters: '75%',
  full: '100%',
  view: '100vh',
  auto: 'auto'
}</code></pre></td>
  </tr>
  <tr>
    <td>borderWidth</td>
    <td><pre><code>{
  none: 'none',
  thin: '1px',
  medium: '2px',
  thick: '4px',
  extraThick: '8px'
}</code></pre></td>
  </tr>
  <tr>
    <td>borderRadius</td>
    <td><pre><code>{
  none: 0,
  small: '.125rem',
  medium: '.25rem',
  large: '.5rem',
  round: '9999px'
}</code></pre></td>
  </tr>
  <tr>
    <td>opacity</td>
    <td><pre><code>{
  full: 1,
  half: 0.5,
  none: 0,
  inherit: 'inherit'
}</code></pre></td>
  </tr>
  <tr>
    <td>boxShadow</td>
    <td><pre><code>{
  small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  medium: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  large: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
}</code></pre></td>
  </tr>
</table>

## Psuedo Rule

Pseudo rules accept an array of rules to apply.

- hover
- active
- focus
- visited

## Static Rules

Static rules pass though the value passed in to the relevant CSS rule.

- display
- flex
- flexBasis
- flexGrow
- flexShrink
- flexDirection
- alignItems
- alignSelf
- justifyContent
- float
- position
- overflow
- fontStyle
- textAlign
- textTransform
- textDecoration
- borderStyle
- backgroundSize
- backgroundAttachment
- backgroundPosition
- backgroundRepeate
- backgroundImage

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to Saluki.

## Inspiration

Saluki owes inspiration to;

- [styled-system](https://github.com/styled-system/styled-system)
- [Tailwind CSS](https://tailwindcss.com)
- [Tachyons](http://tachyons.io/)
- [Rebass](https://rebassjs.org/)
- [tailwind.macro](https://github.com/bradlc/tailwind.macro)

## License

Copyright 2019 NearForm

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
