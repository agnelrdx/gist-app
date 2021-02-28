import * as React from 'react'
import { shallow } from 'enzyme'
import ForkContent from '../ForkContent'
import { fetchForkedList } from '../../../utils/api'

jest.mock('../../../utils/api', () => ({
  fetchForkedList: jest.fn()
}))

describe('Test suite for ForkContent component', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<ForkContent />)
    expect(wrapper).toBeTruthy()
  })

  test('should render avatar when fetchForkedList returns valid data', async () => {
    const apiResponse = {
      git_pull_url: '',
      owner: {
        login: 'test'
      }
    }
    fetchForkedList.mockReturnValueOnce(Promise.resolve([apiResponse]))
    jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb())
    const wrapper = shallow(<ForkContent data={{ forks_url: '' }} />)
    await new Promise(resolve => setTimeout(resolve(), 5000))
    expect(wrapper.find(`[data-test='avatar']`).length).toBe(1)
  })

  test('should render correct description when no data is returned from fetchForkedList', async () => {
    fetchForkedList.mockReturnValueOnce(Promise.resolve([]))
    jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb())
    const wrapper = shallow(<ForkContent data={{ forks_url: '' }} />)
    await new Promise(resolve => setTimeout(resolve(), 5000))
    expect(wrapper.find(`[data-test='empty-records']`).length).toBe(1)
  })
})
