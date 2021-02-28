import * as React from 'react'
import { GistProvider } from '../../../utils/gistContext'
import { mount } from 'enzyme'
import Header from '../Header'
import { fetchGistByUsername } from '../../../utils/api'

jest.mock('../../../utils/api', () => ({
  fetchGistByUsername: jest.fn()
}))

describe('Test suite for Header component', () => {
  const providerWrapper = (component, appData) => mount(<GistProvider value={appData}>{component}</GistProvider>)

  test('should render without crashing', () => {
    const appData = [{}, jest.fn()]
    const wrapper = providerWrapper(<Header />, appData)
    const appTitle = wrapper.find(`[data-test='app-title']`)
    expect(appTitle.length).toBe(1)
  })

  test('should call setInputError when value is added to input', () => {
    const spy = jest.spyOn(React, 'useState')
    const appData = [{}, jest.fn()]
    const wrapper = providerWrapper(<Header />, appData)
    expect(wrapper.find('.Mui-error').length).toBe(0)
    wrapper.find('input').at(0).simulate('keyDown', { key: 'Enter' })
    wrapper.find('input').at(0).simulate('change')
    expect(spy).toHaveBeenCalledWith(false)
  })

  test('should add error class to the search box when no value is entered and submitted', () => {
    const appData = [{}, jest.fn()]
    const wrapper = providerWrapper(<Header />, appData)
    expect(wrapper.find('.Mui-error').length).toBe(0)
    wrapper.find('input').at(0).simulate('keyDown', { key: 'Enter' })
    expect(wrapper.find('.Mui-error').length).toBe(1)
  })

  test('should not call fetchGistByUsername if a random key is pressed', () => {
    const appData = [{}, jest.fn()]
    const wrapper = providerWrapper(<Header />, appData)
    wrapper.find('input').at(0).simulate('keyDown', { key: 'ArrowRight' })
    expect(fetchGistByUsername).not.toHaveBeenCalled()
  })

  test('should not add error class to the search box when value is entered and submitted', () => {
    fetchGistByUsername.mockReturnValueOnce(Promise.resolve([]))
    const appData = [{}, jest.fn()]
    const wrapper = providerWrapper(<Header />, appData)
    wrapper.find('input').at(0).instance().value = 'username'
    wrapper.find('input').at(0).simulate('keyDown', { key: 'Enter' })
    expect(wrapper.find('.Mui-error').length).toBe(0)
  })

  test('should call fetchGistByUsername on search box submit', async () => {
    fetchGistByUsername.mockReturnValueOnce(Promise.resolve([]))
    const appData = [{}, jest.fn()]
    const wrapper = providerWrapper(<Header />, appData)
    wrapper.find('input').at(0).instance().value = 'username'
    wrapper.find('input').at(0).simulate('keyDown', { key: 'Enter' })
    await new Promise(resolve => setTimeout(resolve(), 2000))
    expect(fetchGistByUsername).toHaveBeenCalledWith('username')
  })

  test('should call setAppData with expected data when fetchGistByUsername returns list', async () => {
    const mockGistData = [{ user: 'testUser', owner: { login: 'test' } }]
    fetchGistByUsername.mockReturnValueOnce(Promise.resolve(mockGistData))
    const setAppData = jest.fn()
    const appData = [{ recentSearch: [] }, setAppData]
    const wrapper = providerWrapper(<Header />, appData)
    wrapper.find('input').at(0).instance().value = 'username'
    wrapper.find('input').at(0).simulate('keyDown', { key: 'Enter' })
    await new Promise(resolve => setTimeout(resolve(), 2000))
    const matchData = {
      listLoading: false,
      list: mockGistData,
      error: { status: false, msg: '' },
      recentSearch: [
        {
          username: 'test',
          avatar: ''
        }
      ]
    }
    expect(setAppData).toHaveBeenCalledWith(expect.objectContaining(matchData))
  })

  test('should append correct error message when fetchGistByUsername returns error', async () => {
    fetchGistByUsername.mockReturnValueOnce(Promise.resolve({ error: true }))
    const setAppData = jest.fn()
    const appData = [{}, setAppData]
    const wrapper = providerWrapper(<Header />, appData)
    wrapper.find('input').at(0).instance().value = 'username'
    wrapper.find('input').at(0).simulate('keyDown', { key: 'Enter' })
    await new Promise(resolve => setTimeout(resolve(), 2000))
    const matchData = {
      list: [],
      listLoading: false,
      error: { status: true, msg: 'Invalid username entered!!' }
    }
    expect(setAppData).toHaveBeenCalledWith(expect.objectContaining(matchData))
  })
})
