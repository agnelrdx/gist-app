import React from 'react'
import { GistProvider } from '../utils/gistContext'
import { mount } from 'enzyme'
import App from '../App'

describe('Test suite for App component', () => {
  const providerWrapper = component => mount(<GistProvider>{component}</GistProvider>)

  it('should render without crashing', () => {
    const wrapper = providerWrapper(<App />)
    expect(wrapper.find(`[data-test='component-app']`).length).toBe(1)
  })

  it('should render child component without crashing', () => {
    const wrapper = providerWrapper(<App />)
    expect(wrapper.find(`[data-test='component-header']`).length).toBe(1)
    expect(wrapper.find(`[data-test='component-gist-card']`).length).toBe(1)
    expect(wrapper.find(`[data-test='component-sidebar']`).length).toBe(1)
  })
})
