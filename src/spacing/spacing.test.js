import spacing from './index'

describe('spacing', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      expect(spacing()).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        expect(spacing({ padding: { small: '2rem' } })).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value', () => {
        expect(spacing({ padding: { verysmall: '.5rem' } })).toMatchSnapshot()
      })
    })
  })
})
