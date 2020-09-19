import React from 'react'
import { GistProvider } from '../../utils/gistContext'
import { mount } from 'enzyme'
import Content from './Content'

describe('Content', () => {
  const providerWrapper = component => mount(<GistProvider>{component}</GistProvider>)

  it('should render the title on page load', () => {
    const wrapper = providerWrapper(<Content />)
    expect(wrapper.find('h3').text()).toContain('Gist is an easy method to share snippets or excerpts of data with others')
  })
})
