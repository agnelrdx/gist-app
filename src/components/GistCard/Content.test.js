import React from 'react'
import { gistContext } from '../../utils/gistContext'
import { mount } from 'enzyme'
import Content from './Content'

describe('Content', () => {
  const providerWrapper = (appData, component) =>
    mount(<gistContext.Provider value={[appData]}>{component}</gistContext.Provider>)

  it('should render the title on page load', () => {
    const appData = {
      error: {
        status: false
      }
    }
    const wrapper = providerWrapper(appData, <Content />)
    expect(wrapper.find('h3').text()).toContain('Gist is an easy method to share snippets or excerpts of data with others')
  })

  it('should render error note for no data found', () => {
    const appData = {
      error: {
        status: true
      }
    }
    const wrapper = providerWrapper(appData, <Content />)
    expect(wrapper.find('p').text()).toContain('Try with few sample Ids (Developius, lebradley, mazudi)')
  })
})
