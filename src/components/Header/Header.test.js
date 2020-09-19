import React from 'react'
import { GistProvider } from '../../utils/gistContext'
import { mount } from 'enzyme'
import Header from './Header'

describe('Header', () => {
  const providerWrapper = component => mount(<GistProvider>{component}</GistProvider>)

  it('should render the title in Header', () => {
    const wrapper = providerWrapper(<Header />)
    const h1 = wrapper.find('h1')
    const title = h1.text()
    expect(title).toBe('GIST APP')
  })

  it('should add error class to the search box when no value is entered', () => {
    const wrapper = providerWrapper(<Header />)
    expect(wrapper.find('.Mui-error').length).toBe(0)
    wrapper.find('input').at(0).simulate('keyDown', { key: 'Enter' })
    expect(wrapper.find('.Mui-error').length).toBe(1)
  })

  it('should not add error class to the search box when value is entered', () => {
    const wrapper = providerWrapper(<Header />)
    wrapper.find('input').at(0).instance().value = 'username'
    wrapper.find('input').at(0).simulate('keyDown', { key: 'Enter' })
    expect(wrapper.find('.Mui-error').length).toBe(0)
  })
})
