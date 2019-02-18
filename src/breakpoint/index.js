export const defaultRules = {
  small: '500px',
  medium: '900px',
  large: '1200px'
}

function generateRules(rules) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    newRules[key] = function(rule) {
      return {
        [`@media (min-width: ${value})`]: rule
      }
    }
  }

  return newRules
}

export default function(breakpoint) {
  return generateRules(breakpoint)
}
