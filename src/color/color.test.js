import color, { defaultRules } from './'

describe('color', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      expect(color(defaultRules)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        const combinedRules = {
          ...defaultRules,
          ...{
            red: '#ff0000'
          }
        }
        expect(color(combinedRules)).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value and not amend any existing values', () => {
        const combinedRules = {
          ...defaultRules,
          ...{
            darkestRed: '#540000'
          }
        }
        expect(color(combinedRules)).toMatchSnapshot()
      })
    })
  })
})
