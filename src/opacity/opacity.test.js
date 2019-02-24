import opacity, { defaultRules } from './'

describe('opacity', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      expect(opacity(defaultRules)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        const combinedRules = {
          ...defaultRules,
          ...{ full: 0.99 }
        }
        expect(opacity(combinedRules)).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value', () => {
        const combinedRules = {
          ...defaultRules,
          ...{ quarter: 0.25 }
        }
        expect(opacity(combinedRules)).toMatchSnapshot()
      })
    })
  })
})
