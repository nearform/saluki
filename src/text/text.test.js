import text, { defaultRules, combineRules } from './index'

describe('text', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      const combinedRules = combineRules(defaultRules)
      expect(text(combinedRules)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        const combinedRules = combineRules(defaultRules, {
          size: { small: '.5rem' }
        })
        expect(text(combinedRules)).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value and not amend any existing values', () => {
        const combinedRules = combineRules(defaultRules, {
          size: { extrasmall: '.25rem' }
        })
        expect(text(combinedRules)).toMatchSnapshot()
      })
    })
  })
})
