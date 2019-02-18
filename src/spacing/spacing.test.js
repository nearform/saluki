import spacing, { defaultRules, combineRules } from './index'

describe('spacing', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      const combinedRules = combineRules(defaultRules)
      expect(spacing(combinedRules)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        const combinedRules = combineRules(defaultRules, {
          padding: { small: '2rem' }
        })
        expect(spacing(combinedRules)).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value', () => {
        const combinedRules = combineRules(defaultRules, {
          padding: { verysmall: '.5rem' }
        })
        expect(spacing(combinedRules)).toMatchSnapshot()
      })
    })
  })
})
