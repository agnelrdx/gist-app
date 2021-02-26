import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { act, renderHook } from '@testing-library/react-hooks'
import Counter from './Counter'
import { reducer } from './Counter'

const findElementByAttr = (val, wrapper) => wrapper.find(`[data-test='${val}']`)

describe('Test suite for Counter component', () => {
  test('should render without error', () => {
    const wrapper = shallow(<Counter />)
    const component = findElementByAttr('component-counter', wrapper)
    expect(component.length).toBe(1)
  })

  test('should call useState hook', () => {
    const mockSetCount = jest.fn()
    const useStateMock = () => [0, mockSetCount]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    const wrapperNew = shallow(<Counter />)
    const button = wrapperNew.find(`[data-test='add-button']`)
    button.simulate('click')
    expect(mockSetCount).toHaveBeenCalledWith(1)
  })

  test('should call useEffect hook', () => {
    const mockSetCount = jest.fn()
    const useStateMock = () => [0, mockSetCount]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    jest.spyOn(React, 'useEffect').mockImplementation(cb => cb()())
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
