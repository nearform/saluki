<h1 align="center">Saluki</h1>

<div align="center">

Utility based CSS-in-JS theming.

[![Coverage Status](https://img.shields.io/coveralls/nearform/saluki/master.svg?style=flat)](https://coveralls.io/github/nearform/saluki?branch=master) [![CircleCI Status](https://circleci.com/gh/nearform/saluki.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/nearform/saluki) [![Minified & gzipped size](https://img.shields.io/bundlephobia/minzip/saluki.svg)](https://bundlephobia.com/result?p=saluki) [![npm version](https://img.shields.io/npm/v/saluki.svg?style=flat)](https://www.npmjs.com/package/saluki) [![Dependencies](https://img.shields.io/david/nearform/saluki.svg)](https://www.npmjs.com/package/saluki)

</div>

Saluki works alongside CSS-in-JS theming solutions to allow rapid UI development with out of the box defaults and an intuitive API.

## Features

- ✂️ Zero config - provides a robust default theme for rapid initial setup.
- ⚙️ Built to configure - the default theme can be overridden or extended as desired.
- 🕰 Incrementally adoptable - Saluki can be dropped in to existing projects and steadily migrated towards, no huge rewrite required.
- 📚 Library agnostic - works alongside CSS-in-JS theming solutions such as those provided by Styled Components and Emotion.
- 🤷‍ Unopinionated - no prescribed look or feel, simply building block to create your own.
- 🐭 Tiny footprint - less than 3KB minified & gzipped.

## Usage

Install Saluki and Saluki's default theme as development dependencies.

```sh
npm install --save-dev saluki saluki-theme-default
```

Pass Saluki's default theme into your `<ThemeProvider />` via `createTheme`.

```js
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { createTheme } from 'saluki'
import defaultTheme from 'saluki-theme-default'

const theme = createTheme(defaultTheme)

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

- [Starter example (CodeSandbox)](https://codesandbox.io/s/7kylv2nmr1)
- [Buttons example (CodeSandbox)](https://codesandbox.io/s/mmjw3p6zj9)
- [Responsive grid example (CodeSandbox)](https://codesandbox.io/s/5x9pv13pkk)
- [Responsive card example (CodeSandbox)](https://codesandbox.io/s/zq8r11qvox)
- [Styled Components usage examples (CodeSandbox)](https://codesandbox.io/s/882wx3oq9j)
- [Emotion usage examples (CodeSandbox)](https://codesandbox.io/s/oo2m65wo4q)

## Configuration

It's fairly inevitable that you'll want to provide your own custom theming to override certain rules at some point.

You can do this by passing a second argument into `createTheme` which provides overrides or additions.

Defaults and naming conventions for Saluki's default theme can be [found here](https://github.com/nearform/saluki-theme-default).

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { createTheme } from 'saluki'
import defaultTheme from 'saluki-theme-default'

const customTheme = {
  color: {
    red: '#bd0000'
  }
}
const theme = createTheme(defaultTheme, customTheme)

export const App = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
```

## Creating your own theme

If you already have a theme or want to start from scratch you can do so by passing your theme in as the first argument to `createTheme`.

For your theme to work with Saluki it needs to match the [camelCase rule naming conventions](#configurable-rules) Saluki expects. [Saluki's default theme](https://github.com/nearform/saluki-theme-default/blob/master/index.js) is also a useful reference if required.

## Using props

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

## Responsive variants

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
import { createTheme } from 'saluki'
import defaultTheme from 'saluki-theme-default'

const customTheme = {
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
const theme = createTheme(defaultTheme, customTheme)

export const App = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
```

## Pseudo rules

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

## Object literals

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

### `createTheme`

Arguments

- baseTheme (Object)
- customisations (Object)

### Rules

#### Configurable rules

Configurable rules can be overridden or added to via Saluki's `createTheme` function.

The default values for configurable rules from Saluki's default theme can be [found here](https://github.com/nearform/saluki-theme-default).

- color
- backgroundColor
- borderColor
- breakpoint
- padding
- paddingVertical
- paddingHorizontal
- paddingTop
- paddingRight
- paddingBottom
- paddingLeft
- margin
- marginVertical
- marginHorizontal
- marginTop
- marginRight
- marginBottom
- marginLeft
- fontSize
- fontFamily
- fontWeight
- lineHeight
- letterSpacing
- width
- minWidth
- maxWidth
- height
- minHeight
- maxHeight
- borderWidth
- borderRadius
- opacity
- boxShadow

#### Psuedo rules

Pseudo rules accept an array of rules to apply.

- hover
- active
- focus
- visited

#### Static rules

Static rules pass though the value passed in to the relevant CSS rule.

- display
- flex
- flexWrap
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
- [Rebass](https://rebassjs.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [tailwind.macro](https://github.com/bradlc/tailwind.macro)
- [Tachyons](http://tachyons.io/)

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
