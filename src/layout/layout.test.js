import layout, { defaultRules } from './'

describe('layout', () => {
  it('should return the default config', () => {
    expect(layout(defaultRules)).toMatchSnapshot()
  })
})
