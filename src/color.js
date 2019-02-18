export const color = {
  black: 'black',
  blue: 'blue',
  gray: 'gray',
  green: 'green',
  orange: 'orange',
  red: 'red',
  purple: 'purple',
  yellow: 'yellow',
  white: 'white'
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
