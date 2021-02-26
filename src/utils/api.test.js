import { fetchGistByUsername, fetchForkedList } from './api'
import { API_BASE_URL, GIST_USERNAME_PATH } from './config'
import fetch from './fetch'
jest.mock('./fetch')

describe('Test API', () => {
  test('should return correct path for gist', async () => {
    fetch.mockReturnValue(`${API_BASE_URL}${GIST_USERNAME_PATH}/test/gists`)
    const apiPath = await fetchGistByUsername('test')
    expect(apiPath).toBe(`${API_BASE_URL}${GIST_USERNAME_PATH}/test/gists`)
  })

  test('should return correct path for fork list', async () => {
    fetch.mockReturnValue('test')
    const apiPath = await fetchForkedList('test')
    expect(apiPath).toBe('test')
  })
})
