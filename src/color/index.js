export const defaultRules = {
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
}

const setupColor = colors => {
  let color = {}
  for (const [key, value] of Object.entries(colors)) {
    color[key] = {
      color: value
    }
  }
  return color
}

export default setupColor
