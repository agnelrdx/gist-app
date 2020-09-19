import React from 'react'
import { shallow } from 'enzyme'
import ForkContent from './ForkContent'

describe('ForkContent', () => {
  it('should render the component', () => {
    const wrapper = shallow(<ForkContent />)
    expect(wrapper.find('span').text()).toContain('Loading Forked Users')
  })
})
