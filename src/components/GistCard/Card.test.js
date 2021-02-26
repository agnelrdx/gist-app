import * as React from 'react'
import { gistContext } from '../../utils/gistContext'
import { mount, shallow } from 'enzyme'
import Card from './Card'

describe('Test suite for Card component', () => {
  const providerWrapper = (appData, component) =>
    mount(<gistContext.Provider value={[appData]}>{component}</gistContext.Provider>)

  const findElementByAttr = (val, wrapper) => wrapper.find(`[data-test='${val}']`)

  test('should render the component', () => {
    const appData = {
      list: [
        {
          created_at: '12T23',
          files: {
            test: {
              filename: 'test',
              type: 'test'
            }
          }
        }
      ]
    }
    const mockUseContext = () => [appData]
    jest.spyOn(React, 'useContext').mockImplementation(mockUseContext)
    const wrapper = shallow(<Card />)
    expect(findElementByAttr('component-title', wrapper).length).toBe(1)
  })

  test('should render the description inside component', () => {
    const appData = {
      list: [
        {
          created_at: '12T23',
          description: 'test description',
          files: {
            test: {
              filename: 'test',
              type: 'test'
            }
          }
        }
      ]
    }
    const wrapper = providerWrapper(appData, <Card />)
    expect(findElementByAttr('component-title', wrapper).length).toBe(1)
  })

  test('should render the public flag inside component', () => {
    const appData = {
      list: [
        {
          created_at: '12T23',
          public: true,
          files: {
            test: {
              filename: 'test',
              type: 'test'
            }
          }
        }
      ]
    }
    const wrapper = providerWrapper(appData, <Card />)
    expect(findElementByAttr('component-title', wrapper).length).toBe(1)
  })
})
