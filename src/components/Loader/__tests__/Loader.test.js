import React from 'react'
import { mount } from 'enzyme'
import Loader from '../Loader'

describe('Test suite for Loader component', () => {
  test('should render without crashing', () => {
    const wrapper = mount(<Loader />)
    expect(wrapper.find('[data-test="loader"]')).toHaveLength(1)
  })

  test('should render 8 child skeleton components without crashing', () => {
    const wrapper = mount(<Loader />)
    const children = wrapper.find('[data-test="loader-skeleton"]')
    expect(children).toHaveLength(8)
  })
})
