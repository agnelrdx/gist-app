import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

/**
 * Mock fetch as a global instance
 * @returns {array}
 */
global.fetch = jest.fn(() => Promise.resolve([]))
