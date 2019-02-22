import size, { defaultRules, combineRules } from './'

describe('size', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      const combinedRules = combineRules(defaultRules)
      expect(size(combinedRules)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        const combinedRules = combineRules(defaultRules, {
          height: { small: '10rem' }
        })
        expect(size(combinedRules)).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value', () => {
        const combinedRules = combineRules(defaultRules, {
          width: { tenth: '10%' }
        })
        expect(size(combinedRules)).toMatchSnapshot()
      })
    })
  })
})
