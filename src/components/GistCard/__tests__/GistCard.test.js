import * as React from 'react'
import { mount } from 'enzyme'
import { GistProvider } from '../../../utils/gistContext'
import GistCard from '../GistCard'

describe('Test suite for GistCard component', () => {
  const providerWrapper = (appData, component) => mount(<GistProvider value={[appData]}>{component}</GistProvider>)

  test('should render without crashing', () => {
    const appData = { listLoading: false, list: [], error: { status: false } }
    const wrapper = providerWrapper(appData, <GistCard />)
    expect(wrapper).toBeTruthy()
  })

  test('should render loader without crashing', () => {
    const appData = { listLoading: true, list: [] }
    const wrapper = providerWrapper(appData, <GistCard />)
    expect(wrapper.find(`[data-test='loader']`).length).toBe(1)
  })

  test('should render card without crashing', () => {
    const appData = {
      listLoading: false,
      list: [
        {
          created_at: '12T23',
          files: {
            test: {
              filename: 'test',
              type: 'test'
            }
          }
        }
      ]
    }
    const wrapper = providerWrapper(appData, <GistCard />)
    expect(wrapper.find(`[data-test='flag']`).length).toBe(1)
  })
})
