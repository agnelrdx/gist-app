import { API_BASE_URL, GIST_USERNAME_PATH } from './config'
/* Load dummy data when rate limit is exceeded 
import data from './dummy.json' */

const api = url =>
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error()
      return res.json()
    })
    .catch(err => ({ error: true }))

export const fetchGistByUsername = async username => {
  /* Add delay to see the loader in action */
  await new Promise(resolve => setTimeout(resolve, 1000))
  return await api(`${API_BASE_URL}${GIST_USERNAME_PATH}/${username}/gists`)
}

export const fetchForkedList = async url => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return await api(url)
}
