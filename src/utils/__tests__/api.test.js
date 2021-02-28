import { fetchGistByUsername, fetchForkedList } from '../api'
import { API_BASE_URL, GIST_USERNAME_PATH } from '../config'

describe('Test suite for API utils', () => {
  test('should call external api with correct gist path', async () => {
    await fetchGistByUsername('test')
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}${GIST_USERNAME_PATH}/test/gists`)
  })

  test('should call external api with correct fork path', async () => {
    await fetchForkedList('test')
    expect(fetch).toHaveBeenCalledWith('test')
  })
})
