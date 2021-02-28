import ReactDOM from 'react-dom'
import { reactStrictMode, rootElement } from '../index'

jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('Test suite for Index', () => {
  test('should render without crashing', () => {
    ReactDOM.render(reactStrictMode, rootElement)
    expect(ReactDOM.render).toHaveBeenCalledWith(reactStrictMode, rootElement)
  })
})
