import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

describe('Counter test suite', () => {
  const wrapper = shallow(<Counter />)

  const findElementByAttr = val => wrapper.find(`[data-test='${val}']`)

  test('Renders without error', () => {
    const appComponent = findElementByAttr('component-counter')
    expect(appComponent.length).toBe(1)
  })

  test('Renders Add and Subtract button', () => {
    const addButton = findElementByAttr('add-button')
    const subtractButton = findElementByAttr('subtract-button')
    expect(addButton.length).toBe(1)
    expect(subtractButton.length).toBe(1)
  })

  test('Renders init count with 0', () => {
    const count = findElementByAttr('count').text()
    expect(count).toBe('0')
  })

  test('Increment count on clicking Add button', () => {
    const button = findElementByAttr('add-button')
    button.simulate('click')
    const count = findElementByAttr('count').text()
    expect(count).toBe('1')
  })

  test('decrement count on clicking Subtract button', () => {
    const subtractButton = findElementByAttr('subtract-button')
    subtractButton.simulate('click')
    const count = findElementByAttr('count').text()
    expect(count).toBe('0')
  })
})
