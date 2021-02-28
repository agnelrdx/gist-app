import { API_BASE_URL, GIST_USERNAME_PATH, defaultRecentSearch, initialAppData } from '../config'

describe('Test suite for Config utils', () => {
  test('should return the correct base url', () => {
    expect(API_BASE_URL).toBe('https://api.github.com')
  })

  test('should return the gist username path', () => {
    expect(GIST_USERNAME_PATH).toBe('/users')
  })

  test('should have minimum single item in defaultRecentSearch', () => {
    expect(defaultRecentSearch.length).not.toBe(0)
  })

  test('should have the required keys in initialAppData', () => {
    const requiredKeys = ['error', 'listLoading', 'list', 'recentSearch']
    const status = requiredKeys.every(k => Object.keys(initialAppData).includes(k))
    expect(status).toBeTruthy()
  })
})
