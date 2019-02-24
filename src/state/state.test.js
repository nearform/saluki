import state from './'

describe('state', () => {
  describe('hover', () => {
    it('should wrap the rule passed in', () => {
      expect(state.hover({ background: 'red' })).toEqual({
        '&:hover': {
          background: 'red'
        }
      })
    })
  })

  describe('active', () => {
    it('should wrap the rule passed in', () => {
      expect(state.active({ color: 'blue' })).toEqual({
        '&:active': {
          color: 'blue'
        }
      })
    })
  })
})
