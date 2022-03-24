import { api } from '../api'

describe('Instance API', () => {
  it('should create api', () => {
    const base = api('http://localhost:3000');
    expect(base.defaults.baseURL).toBe('http://localhost:3000')
  })
})