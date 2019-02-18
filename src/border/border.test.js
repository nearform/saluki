import border from './'
import { color } from '../color'

describe('border', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      expect(border(undefined, color)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        expect(border({ thick: 45 })).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value', () => {
        expect(border({ superThick: 100 })).toMatchSnapshot()
      })
    })
  })
})
