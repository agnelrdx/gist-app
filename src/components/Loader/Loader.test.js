import React from 'react'
import { mount } from 'enzyme'
import Loader from './Loader'

describe('Loader', () => {
  it('should render the component', () => {
    const wrapper = mount(<Loader />)
    expect(wrapper.find('[data-test="loader"]')).toHaveLength(1)
  })

  it('should render 8 child skeleton components', () => {
    const wrapper = mount(<Loader />)
    const children = wrapper.find('[data-test="loader-skeleton"]')
    expect(children).toHaveLength(8)
  })
})
