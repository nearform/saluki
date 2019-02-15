function generateRules(customRules) {
  const defaultRules = {
    small: '500px',
    medium: '900px',
    large: '1200px'
  }

  const combinedRules = {
    ...defaultRules,
    ...customRules
  }

  const breakpoint = {}

  for (const [key, value] of Object.entries(combinedRules)) {
    breakpoint[key] = function(rule) {
      return {
        [`@media (min-width: ${value})`]: rule
      }
    }
  }

  return breakpoint
}

export default function(customBreakpoint = {}) {
  return generateRules(customBreakpoint)
}
