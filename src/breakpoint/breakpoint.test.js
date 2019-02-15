import breakpoint from './index'

describe('breakpoint', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      expect(breakpoint().small({ padding: '100px' })).toEqual({
        '@media (min-width: 500px)': {
          padding: '100px'
        }
      })
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        expect(
          breakpoint({ small: '600px' }).small({ padding: '200px' })
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
          breakpoint({ verysmall: '400px' }).verysmall({ padding: '50px' })
        ).toEqual({
          '@media (min-width: 400px)': {
            padding: '50px'
          }
        })
        expect(breakpoint().small({ padding: '200px' })).toEqual({
          '@media (min-width: 500px)': {
            padding: '200px'
          }
        })
      })
    })
  })
})
