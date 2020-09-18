export const API_BASE_URL = 'https://api.github.com'

export const GIST_USERNAME_PATH = '/users'

const defaultRecentSearch = [
  {
    username: 'pmoranga',
    avatar: 'https://avatars1.githubusercontent.com/u/92371?v=4'
  },
  {
    username: 'tcelia',
    avatar: 'https://avatars2.githubusercontent.com/u/70104437?v=4'
  },
  {
    username: 'yogeshvar',
    avatar: 'https://avatars3.githubusercontent.com/u/17572818?v=4'
  }
]

export const initialAppData = {
  error: {
    status: false,
    msg: ''
  },
  listLoading: false,
  list: [],
  recentSearch: defaultRecentSearch
}
