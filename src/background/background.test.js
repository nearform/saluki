import background, { defaultRules, combineRules } from './'
import { color } from '../color'

describe('background', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      const combinedRules = combineRules(defaultRules, undefined, color)
      expect(background(combinedRules)).toMatchSnapshot()
    })
  })

  describe('url', () => {
    it('should create a rule using the string passed in', () => {
      const combinedRules = combineRules(defaultRules, undefined, color)
      expect(
        background(combinedRules).url('https://nearform.com/logo.png')
      ).toEqual({
        'background-image': 'url(https://nearform.com/logo.png)'
      })
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config attempts to amend a static value', () => {
      it('should not amend the static value', () => {
        const combinedRules = combineRules(
          defaultRules,
          {
            size: { auto: 'cover' }
          },
          color
        )
        expect(background(combinedRules).size.auto['background-size']).toBe(
          'auto'
        )
      })
    })
  })
})
