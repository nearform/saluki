import psuedo from '.'

describe('psuedo', () => {
  describe('hover', () => {
    it('should wrap the rule passed in', () => {
      expect(psuedo.hover({ background: 'red' })).toEqual({
        '&:hover': {
          background: 'red'
        }
      })
    })
  })

  describe('active', () => {
    it('should wrap the rule passed in', () => {
      expect(psuedo.active({ color: 'blue' })).toEqual({
        '&:active': {
          color: 'blue'
        }
      })
    })
  })

  describe('focus', () => {
    it('should wrap the rule passed in', () => {
      expect(psuedo.focus({ border: 'green' })).toEqual({
        '&:focus': {
          border: 'green'
        }
      })
    })
  })

  describe('visited', () => {
    it('should wrap the rule passed in', () => {
      expect(psuedo.visited({ 'text-decoration': 'none' })).toEqual({
        '&:visited': {
          'text-decoration': 'none'
        }
      })
    })
  })
})
