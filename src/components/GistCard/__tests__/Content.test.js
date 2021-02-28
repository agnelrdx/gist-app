import React from 'react'
import { GistProvider } from '../../../utils/gistContext'
import { mount } from 'enzyme'
import Content from '../Content'

describe('Test suite for Content component', () => {
  const providerWrapper = (appData, component) => mount(<GistProvider value={[appData]}>{component}</GistProvider>)

  test('should render the title on page load', () => {
    const appData = {
      error: {
        status: false
      }
    }
    const wrapper = providerWrapper(appData, <Content />)
    expect(wrapper.find(`[data-test='content-title']`).length).toBe(1)
  })

  test('should render error note for no data found', () => {
    const appData = {
      error: {
        status: true
      }
    }
    const wrapper = providerWrapper(appData, <Content />)
    expect(wrapper.find(`[data-test='error-title']`).length).toBe(1)
  })
})
