import border, { defaultRules, combineRules } from './'
import { color } from '../color'

describe('border', () => {
  describe('when no custom config is provided', () => {
    it('should return the default config', () => {
      const combinedRules = combineRules(
        defaultRules,
        {
          width: {},
          radius: {}
        },
        color
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
          color
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
          color
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
          color
        )
        expect(border(combinedRules).style.solid['border-style']).toBe('solid')
      })
    })
  })
})
