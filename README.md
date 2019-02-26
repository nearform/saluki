<h1 align="center">Saluki</h1>

<div align="center">

Utility styles for CSS-in-JS.

[![Coverage Status](https://img.shields.io/coveralls/nearform/saluki/master.svg?style=flat)](https://coveralls.io/github/nearform/saluki?branch=master) [![CircleCI Status](https://circleci.com/gh/nearform/saluki.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/nearform/saluki) [![Minified & gzipped size](https://img.shields.io/bundlephobia/minzip/saluki.svg)](https://bundlephobia.com/result?p=saluki) [![npm version](https://img.shields.io/npm/v/saluki.svg?style=flat)](https://www.npmjs.com/package/saluki) [![Dependencies](https://img.shields.io/david/nearform/saluki.svg)](https://www.npmjs.com/package/saluki)

> **_Please note:_** breaking changes are expected in these early stages whilst we settle on the best API possible.
>
> Check [Saluki's issues](https://github.com/nearform/saluki/issues) for discussions on potential changes or feel free to raise your own.

</div>

## Features

- 🐭 Tiny footprint - less than 4KB minified & gzipped.
- 📚 Library agnostic - works out of the box with Styled Components and Emotion.
- ✂️ Zero config - comes with a robust suite of utility styles.
- 🤷‍ Unopinionated - Saluki doesn't prescribe a look or feel, it offers you the building block to create your own.
- ⚙️ Built to configure - each utility can be overridden or extended to suit your needs.
- 🐶 Provides consistency - by having a single source of truth.

## Documentation

Please visit [https://nearform.github.io/saluki](https://nearform.github.io/saluki) for the documentation.

## Quick Start

Install Saluki as a development dependency.

```sh
npm install --save-dev saluki
```

Import the rules you'd like to use.

```js
import {
  background,
  border,
  breakpoint,
  color,
  layout,
  opacity,
  psuedo,
  shadow,
  spacing,
  size,
  text
} from 'saluki'
```

Create visual primitives using your favorite CSS-in-JS solution and use them in your React components.

### Styled Components

```jsx
import React from 'react'
import styled from 'styled-components/macro'
import { color, text } from 'saluki'

const StyledHeader = styled.h1`
  ${color.red}
  ${text.size.large}
`

export const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>
```

[Further Styled Components integration options](https://nearform.github.io/saluki/styled-components/)

### Emotion

```jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { color, text } from 'saluki'

export const Header = ({ children }) => (
  <h1
    css={css`
      ${color.red}
      ${text.size.large}
    `}
  >
    {children}
  </h1>
)
```

[Further Emotion integration options](https://nearform.github.io/saluki/emotion/)

### Configuration

Saluki doesn't need any configuration to get started.

It is, however, fairly inevitable that you'll want to provide your own custom config for certain rules.

You can do this by passing a custom config object into init.

```js
import { init } from 'saluki'

const salukiConfig = {
  color: {
    red: '#bd0000'
  }
}

init(salukiConfig)
```

You only need to call `init` once and it needs to be called before you import any modules which use Saluki.

The best way to achieve this is to create a config file and import it into your application entry point.

[Further configuration details](https://nearform.github.io/saluki/configuration/)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to Saluki.

## Inspiration

Saluki owes inspiration to;

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
