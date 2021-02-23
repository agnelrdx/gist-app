import React, { useState } from 'react'

export default () => {
  const [counter, setCounter] = useState(0)

  return (
    <div data-test="component-counter">
      <h1>
        React Counter <span data-test="count">{counter}</span>
      </h1>
      <button data-test="add-button" onClick={() => setCounter(prev => prev + 1)}>
        Add
      </button>
      <button data-test="subtract-button" onClick={() => setCounter(prev => (prev === 0 ? 0 : prev - 1))}>
        Subtract
      </button>
    </div>
  )
}
