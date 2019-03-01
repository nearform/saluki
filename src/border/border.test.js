import border, { defaultRules, combineRules } from './'
import { defaultRules as defaultColorRules } from '../color'

describe('border', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      const combinedRules = combineRules(
        defaultRules,
        undefined,
        defaultColorRules
      )
      expect(border(combinedRules)).toMatchSnapshot()
    })
  })

  describe('when custom config is provided', () => {
    describe('when the custom config overrides a value', () => {
      it('should replace the default value', () => {
        const combinedRules = combineRules(
          defaultRules,
          {
            width: { thin: '.5rem' }
          },
          defaultColorRules
        )
        expect(border(combinedRules)).toMatchSnapshot()
      })
    })

    describe('when the custom config provides a new value', () => {
      it('should add the value and not amend any existing values', () => {
        const combinedRules = combineRules(
          defaultRules,
          {
            radius: { huge: '20px' }
          },
          defaultColorRules
        )
        expect(border(combinedRules)).toMatchSnapshot()
      })
    })

    describe('when the custom config attempts to amend a static value', () => {
      it('should not amend the static value', () => {
        const combinedRules = combineRules(
          defaultRules,
          {
            style: { solid: 'dashed' }
          },
          defaultColorRules
        )
        expect(border(combinedRules).style.solid['border-style']).toBe('solid')
      })
    })
  })
})
