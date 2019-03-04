export const defaultRules = {
  notSmall: '576px',
  medium: { min: '768px', max: '991px' },
  large: '992px'
}

function generateRules(rules) {
  const newRules = {}

  for (const [key, value] of Object.entries(rules)) {
    newRules[key] = function(rule) {
      if (typeof rule === 'object' && value.min && value.max) {
        return {
          [`@media (min-width: ${value.min}) and (max-width: ${
            value.max
          })`]: rule
        }
      }
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
