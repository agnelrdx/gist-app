import React from 'react'
import { GistProvider } from '../../../utils/gistContext'
import { mount } from 'enzyme'
import Sidebar from '../Sidebar'
import { fetchGistByUsername } from '../../../utils/api'

jest.mock('../../../utils/api', () => ({
  fetchGistByUsername: jest.fn()
}))

describe('Test suite for Sidebar component', () => {
  const providerWrapper = (component, appData) => mount(<GistProvider value={appData}>{component}</GistProvider>)

  test('should render without crashing', () => {
    const appData = [{ recentSearch: [] }, jest.fn()]
    const wrapper = providerWrapper(<Sidebar />, appData)
    expect(wrapper.find(`[data-test='component-sidebar']`).length).toBe(1)
  })

  test('should call fetchGistByUsername on row click', () => {
    fetchGistByUsername.mockReturnValueOnce(Promise.resolve([]))
    const appData = [{ recentSearch: [{ username: 'test' }] }, jest.fn()]
    const wrapper = providerWrapper(<Sidebar />, appData)
    const button = wrapper.find(`[data-test='recent-search-row-0']`)
    button.simulate('click')
    expect(fetchGistByUsername).toHaveBeenCalledWith('test')
  })

  test('should call setAppData with expected data when fetchGistByUsername returns list', async () => {
    fetchGistByUsername.mockReturnValueOnce(Promise.resolve([{ user: 'testUser' }]))
    const setAppData = jest.fn()
    const appData = [{ recentSearch: [{ username: 'test' }] }, setAppData]
    const wrapper = providerWrapper(<Sidebar />, appData)
    const button = wrapper.find(`[data-test='recent-search-row-0']`)
    button.simulate('click')
    await new Promise(resolve => setTimeout(resolve(), 2000))
    const matchData = {
      recentSearch: [{ username: 'test' }],
      list: [{ user: 'testUser' }],
      listLoading: false,
      error: { status: false, msg: '' }
    }
    expect(setAppData).toHaveBeenCalledWith(expect.objectContaining(matchData))
  })

  test('should append correct error message when fetchGistByUsername returns error', async () => {
    fetchGistByUsername.mockReturnValueOnce(Promise.resolve({ error: true }))
    const setAppData = jest.fn()
    const appData = [{ recentSearch: [{ username: 'test' }] }, setAppData]
    const wrapper = providerWrapper(<Sidebar />, appData)
    const button = wrapper.find(`[data-test='recent-search-row-0']`)
    button.simulate('click')
    await new Promise(resolve => setTimeout(resolve(), 2000))
    const matchData = {
      recentSearch: [{ username: 'test' }],
      list: [],
      listLoading: false,
      error: { status: true, msg: 'Invalid username entered!!' }
    }
    expect(setAppData).toHaveBeenCalledWith(expect.objectContaining(matchData))
  })
})
