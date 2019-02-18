import background from './'
import { color } from '../color'

describe('background', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      expect(background(undefined, color)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        expect(background({ sizes: { cover: '50%' } })).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value', () => {
        expect(background({ sizes: { 75: '75%' } })).toMatchSnapshot()
      })
    })
  })
})
