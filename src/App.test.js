import React from 'react'
import { GistProvider } from './utils/gistContext'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
  const providerWrapper = component => mount(<GistProvider>{component}</GistProvider>)

  it('should render the component', () => {
    const wrapper = providerWrapper(<App />)
    expect(wrapper.find('div').at(0).hasClass('App')).toBeTruthy()
  })

  it('should render the child component', () => {
    const wrapper = providerWrapper(<App />)
    expect(wrapper.find('header')).toBeTruthy()
    expect(wrapper.find('h3').text()).toContain('Gist is an easy method to share snippets or excerpts of data with others')
    expect(wrapper.find('h2').text()).toContain('Recent Search')
  })
})
