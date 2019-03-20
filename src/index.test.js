import { theme, color, fontStyle, breakpoint, hover } from '.'

describe('theme', () => {
  describe('when no custom theme is passed in', () => {
    it('should return the default theme', () => {
      expect(theme().color.red).toEqual({ color: '#f03e3e' })
    })
  })

  describe('when a custom theme is passed in', () => {
    describe('when the custom theme overrides a default value', () => {
      it('should return the theme with the overridden value present', () => {
        expect(theme({ color: { red: 'yellow' } }).color.red).toEqual({
          color: 'yellow'
        })
      })
    })

    describe('when the custom theme adds a new value', () => {
      it('should return the default theme with the new value added', () => {
        const newTheme = theme({ color: { reddish: 'pink' } })
        expect(newTheme.color.reddish).toEqual({
          color: 'pink'
        })
        expect(newTheme.color.red).toEqual({
          color: '#f03e3e'
        })
      })
    })
  })
})

describe('standard rule', () => {
  describe('when called with a props argument', () => {
    describe('when the first argument is a string', () => {
      it('should return the relevant css rule from the theme', () => {
        const props = {
          theme: {
            color: {
              red: {
                color: '#f03e3e'
              }
            }
          }
        }
        expect(color('red', props)).toEqual({ color: '#f03e3e' })
      })
    })

    describe('when the first argument is not a string', () => {
      it('should use the value from props', () => {
        const props = {
          color: 'red',
          theme: {
            color: {
              red: {
                color: '#f03e3e'
              }
            }
          }
        }
        expect(color(props)).toEqual({ color: '#f03e3e' })
      })
    })

    describe('when the first argument exists in props', () => {
      describe('when the rule is a string', () => {
        it('should use the value from props rather than theme', () => {
          const theme = {
            color: {
              red: {
                color: '#f03e3e'
              }
            }
          }
          expect(color('red', theme)).toEqual({ color: '#f03e3e' })
        })
      })
    })
  })

  describe('when called with props in scope', () => {
    describe('when the first argument is a string', () => {
      it('should return the relevant css rule', () => {
        const props = {
          color: 'red',
          theme: {
            color: {
              red: {
                color: '#f03e3e'
              }
            }
          }
        }
        expect(color('red').call('red', props)).toEqual({ color: '#f03e3e' })
      })
    })

    describe('when the first argument exists in props', () => {
      it('should use the value from props rather than theme', () => {
        const theme = {
          color: {
            red: {
              color: '#f03e3e'
            }
          }
        }
        expect(color('red').call('red', theme)).toEqual({ color: '#f03e3e' })
      })
    })
  })
})

describe('static rule', () => {
  describe('when a static rule is called', () => {
    it('should create a css rule using the value passed in', () => {
      expect(fontStyle('italic')).toEqual({ fontStyle: 'italic' })
    })
  })
})

describe('breakpoint rule', () => {
  describe('when called with the props argument', () => {
    describe('when the props argument is the theme', () => {
      it('should return the relevant css rule', () => {
        const large = theme().breakpoint.large
        const t = {
          breakpoint: {
            large
          },
          color: {
            red: {
              color: '#f03e3e'
            }
          }
        }
        expect(breakpoint('large', [color('red')], t)).toEqual({
          '@media (min-width: 992px)': {
            color: '#f03e3e'
          }
        })
      })
    })
  })

  describe('when the props argument contains the theme', () => {
    it('should return the relevant css rule', () => {
      const medium = theme().breakpoint.medium
      const props = {
        theme: {
          breakpoint: {
            medium
          },
          color: {
            red: {
              color: '#f03e3e'
            }
          }
        }
      }
      expect(breakpoint('medium', [color('red')], props)).toEqual({
        '@media (min-width: 768px) and (max-width: 991px)': {
          color: '#f03e3e'
        }
      })
    })
  })

  describe('when called with props in scope', () => {
    it('should return the relevant css rule', () => {
      const props = {
        theme: {
          breakpoint: {
            large: function(rule) {
              return {
                large: rule
              }
            }
          },
          color: {
            red: {
              color: '#f03e3e'
            }
          }
        }
      }
      expect(
        breakpoint('large', [color('red')]).call(
          ['large', [color('red')]],
          props
        )
      ).toEqual({
        large: {
          color: '#f03e3e'
        }
      })
    })
  })
})

describe('psuedo rule', () => {
  describe('when called with a props argument', () => {
    it('should return the relavent css rule', () => {
      const props = {
        theme: {
          color: {
            red: {
              color: '#f03e3e'
            }
          }
        }
      }
      expect(hover([color('red')], props)).toEqual({
        '&:hover': { color: '#f03e3e' }
      })
    })
  })

  describe('when called with props in scope', () => {
    it('should return the relavent css rule', () => {
      const props = {
        theme: {
          color: {
            red: {
              color: '#f03e3e'
            }
          }
        }
      }
      expect(hover([color('red')]).call([color('red')], props)).toEqual({
        '&:hover': { color: '#f03e3e' }
      })
    })
  })

  describe('when called with an object rule', () => {
    it('should return the relavent css rule', () => {
      const props = {
        theme: {
          color: {
            red: {
              color: '#f03e3e'
            }
          }
        }
      }
      expect(hover([{ color: 'red' }], props)).toEqual({
        '&:hover': { color: 'red' }
      })
    })
  })
})
