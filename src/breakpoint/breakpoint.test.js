import breakpoint, { defaultRules } from './'

describe('breakpoint', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      expect(breakpoint(defaultRules).notSmall({ padding: '100px' })).toEqual({
        '@media (min-width: 576px)': {
          padding: '100px'
        }
      })
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        expect(
          breakpoint({ ...defaultRules, notSmall: '600px' }).notSmall({
            padding: '200px'
          })
        ).toEqual({
          '@media (min-width: 600px)': {
            padding: '200px'
          }
        })
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value and not amend any existing values', () => {
        expect(
          breakpoint({
            ...defaultRules,
            small: { min: '0px', max: '575px' }
          }).small({
            padding: '50px'
          })
        ).toEqual({
          '@media (min-width: 0px) and (max-width: 575px)': {
            padding: '50px'
          }
        })
        expect(breakpoint(defaultRules).notSmall({ padding: '200px' })).toEqual(
          {
            '@media (min-width: 576px)': {
              padding: '200px'
            }
          }
        )
      })
    })
  })
})
