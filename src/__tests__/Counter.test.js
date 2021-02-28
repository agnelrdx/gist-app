import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { act, renderHook } from '@testing-library/react-hooks'
import Counter from '../Counter'
import { reducer } from '../Counter'

const findElementByAttr = (val, wrapper) => wrapper.find(`[data-test='${val}']`)

describe('Test suite for Counter component', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<Counter />)
    const component = findElementByAttr('component-counter', wrapper)
    expect(component.length).toBe(1)
  })

  test('should call useState hook on button click', () => {
    const mockSetCount = jest.fn()
    const useStateMock = () => [0, mockSetCount]
    jest.spyOn(React, 'useState').mockImplementationOnce(useStateMock)
    const wrapperNew = shallow(<Counter />)
    const button = wrapperNew.find(`[data-test='add-button']`)
    button.simulate('click')
    expect(mockSetCount).toHaveBeenCalledWith(1)
  })

  test('should subtract number subtract button click', () => {
    let count
    const wrapperNew = shallow(<Counter />)
    // Simulate click on add button
    const addButton = wrapperNew.find(`[data-test='add-button']`)
    addButton.simulate('click')
    count = wrapperNew.find(`[data-test='count']`).text()
    expect(count).toBe('1')
    // Simulate click on subtract button to check if the number is subtracted
    const subtractButton = wrapperNew.find(`[data-test='subtract-button']`)
    subtractButton.simulate('click')
    count = wrapperNew.find(`[data-test='count']`).text()
    expect(count).toBe('0')
  })

  test('should not subtract number less than zero', () => {
    const wrapperNew = shallow(<Counter />)
    const button = wrapperNew.find(`[data-test='subtract-button']`)
    button.simulate('click')
    button.simulate('click')
    const count = wrapperNew.find(`[data-test='count']`).text()
    expect(count).toBe('0')
  })

  test('should call useEffect hook on page load', () => {
    const mockSetCount = jest.fn()
    const useStateMock = () => [0, mockSetCount]
    jest.spyOn(React, 'useState').mockImplementationOnce(useStateMock)
    jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb()())
    shallow(<Counter />)
    expect(mockSetCount).toHaveBeenCalled()
  })

  test('should render dispatched state correctly', () => {
    const wrapper = mount(<Counter />)
    const button = findElementByAttr('dispatch-button', wrapper)
    button.simulate('click')
    const text = findElementByAttr('state', wrapper).text()
    expect(text).toBe('NEW WORD')
  })

  test('should render initial state correctly', () => {
    const wrapper = mount(<Counter />)
    const text = findElementByAttr('state', wrapper).text()
    expect(text).toBe('INIT')
  })

  test('should render default state for incorrect action type', () => {
    const { result } = renderHook(() => React.useReducer(reducer, { word: 'INIT' }))
    const [, dispatch] = result.current

    act(() => {
      dispatch({ type: 'ERROR' })
    })

    expect(result.error).toEqual(Error('Unknown action type'))
  })
})
