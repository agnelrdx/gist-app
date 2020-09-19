import React from 'react'
import { GistProvider } from '../../utils/gistContext'
import { mount } from 'enzyme'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  const providerWrapper = component => mount(<GistProvider>{component}</GistProvider>)

  it('should render the title in Sidebar', () => {
    const wrapper = providerWrapper(<Sidebar />)
    const h2 = wrapper.find('h2')
    const title = h2.text()
    expect(title).toBe('Recent Search')
  })

  it('should render 3 default recent list rows', () => {
    const wrapper = providerWrapper(<Sidebar />)
    const children = wrapper.find('[data-test="recent-search-row"]')
    expect(children).toHaveLength(3)
  })
})
