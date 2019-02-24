export const defaultRules = {
  full: 1,
  half: 0.5,
  none: 0,
  inherit: 'inherit'
}

function generateRules(rules) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    newRules[key] = {
      opacity: value
    }
  }

  return newRules
}

export default function(opacity) {
  return generateRules(opacity)
}
