import React from 'react'
import { mount } from 'enzyme'
import { GistProvider } from '../../../utils/gistContext'
import Card from '../Card'

describe('Test suite for Card component', () => {
  const providerWrapper = (appData, component) => mount(<GistProvider value={[appData]}>{component}</GistProvider>)

  const findElementByAttr = (val, wrapper) => wrapper.find(`[data-test='${val}']`)

  test('should render without crashing', () => {
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
    const wrapper = providerWrapper(appData, <Card />)
    expect(wrapper).toBeTruthy()
  })

  test('should render description as NA when no description is passed', () => {
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
    expect(findElementByAttr('description', wrapper).text()).toBe('Description: NA')
  })

  test('should render the correct description', () => {
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
    expect(findElementByAttr('description', wrapper).text()).toBe('Description: test description')
  })
})
