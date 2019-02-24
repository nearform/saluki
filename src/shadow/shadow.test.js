import shadow, { defaultRules } from './'

describe('shadow', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      expect(shadow(defaultRules)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        const combinedRules = {
          ...defaultRules,
          ...{ large: '5px 10px rgba(0,0,0,0.25)' }
        }
        expect(shadow(combinedRules)).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value', () => {
        const combinedRules = {
          ...defaultRules,
          ...{ solid: '10px 20px' }
        }
        expect(shadow(combinedRules)).toMatchSnapshot()
      })
    })
  })
})
