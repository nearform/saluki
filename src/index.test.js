import { createTheme, color, fontStyle, breakpoint, hover } from '.'

describe('createTheme', () => {
  describe('when no theme is passed in', () => {
    it('should throw an error', () => {
      expect(() => createTheme()).toThrowError()
    })
  })
  describe('when a theme is passed in', () => {
    it('should return the theme rule when called', () => {
      expect(createTheme({ color: { red: 'pink' } }).color.red).toEqual({
        color: 'pink'
      })
    })
  })

  describe('when both a theme and override are passed in', () => {
    it('should return the theme with the value overriden and new additions', () => {
      const theme = createTheme(
        { color: { red: 'red' } },
        { color: { red: 'pink', darkBlue: 'navy' } }
      )
      expect(theme.color.red).toEqual({
        color: 'pink'
      })
      expect(theme.color.darkBlue).toEqual({
        color: 'navy'
      })
    })
  })

  describe('when vertical and horizontal rules are created', () => {
    it('should return the rules as expected', () => {
      const theme = createTheme({ padding: { small: '1px' } })
      expect(theme.paddingVertical.small).toEqual({
        paddingTop: '1px',
        paddingBottom: '1px'
      })
      expect(theme.paddingHorizontal.small).toEqual({
        paddingLeft: '1px',
        paddingRight: '1px'
      })
    })
  })

  describe('breakpoint config', () => {
    describe("when the theme contains a breakpoint config that isn't an object", () => {
      it('should throw an error', () => {
        expect(() =>
          createTheme({ breakpoint: { palm: '418px' } })
        ).toThrowError()
      })
    })

    describe("when the theme contains a breakpoint config that is an object but doesn't contain a min or max value", () => {
      it('should throw an error', () => {
        expect(() =>
          createTheme({ breakpoint: { palm: { minimum: '418px' } } })
        ).toThrowError()
      })
    })

    describe('when the theme contains a breakpoint with just a max value', () => {
      it('return a max breakpoint', () => {
        const theme = createTheme({
          breakpoint: { palm: { max: '418px' } },
          color: { red: '#f03e3e' }
        })

        expect(breakpoint('palm', [color('red')], theme)).toEqual({
          '@media (max-width: 418px)': {
            color: '#f03e3e'
          }
        })
      })
    })

    describe('when the theme contains a breakpoint with just a min value', () => {
      it('return a min breakpoint', () => {
        const theme = createTheme({
          breakpoint: { palm: { min: '418px' } },
          color: { red: '#f03e3e' }
        })

        expect(breakpoint('palm', [color('red')], theme)).toEqual({
          '@media (min-width: 418px)': {
            color: '#f03e3e'
          }
        })
      })
    })

    describe('when the theme contains a breakpoint with both min and max values', () => {
      it('return a min and max breakpoint', () => {
        const theme = createTheme({
          breakpoint: { palm: { min: '418px', max: '518px' } },
          color: { red: '#f03e3e' }
        })

        expect(breakpoint('palm', [color('red')], theme)).toEqual({
          '@media (min-width: 418px) and (max-width: 518px)': {
            color: '#f03e3e'
          }
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
  describe('when a static rule exists in props', () => {
    it('should use the prop rule', () => {
      const props = {
        fontStyle: 'italic'
      }
      expect(fontStyle(props)).toEqual({ fontStyle: 'italic' })
    })
  })

  describe('when a static rule is called with a value', () => {
    it('should create a css rule using the value', () => {
      expect(fontStyle('italic')).toEqual({ fontStyle: 'italic' })
    })
  })

  describe('when a static rule is called without a value or corresponding props', () => {
    it('should return null', () => {
      expect(fontStyle({})).toBeNull()
    })
  })
})

describe('breakpoint rule', () => {
  describe('when called with the props argument', () => {
    describe('when the props argument is the theme', () => {
      it('should return the relevant css rule', () => {
        const large = createTheme({
          breakpoint: { large: { min: '992px' } }
        }).breakpoint.large
        const theme = {
          breakpoint: {
            large
          },
          color: {
            red: {
              color: '#f03e3e'
            }
          }
        }
        expect(breakpoint('large', [color('red')], theme)).toEqual({
          '@media (min-width: 992px)': {
            color: '#f03e3e'
          }
        })
      })
    })
  })

  describe('when the props argument contains the theme', () => {
    it('should return the relevant css rule', () => {
      const medium = createTheme({
        breakpoint: { medium: { min: '768px', max: '991px' } }
      }).breakpoint.medium
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
