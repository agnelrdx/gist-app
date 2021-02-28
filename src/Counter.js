import React, { useState, useEffect, useReducer } from 'react'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { word: action.payload }
    default:
      throw new Error('Unknown action type')
  }
}

export default () => {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { word: 'INIT' })

  useEffect(() => {
    setCount(1)
    return () => {
      setCount(0)
    }
  }, [])

  const changeState = () => dispatch({ type: 'CHANGE', payload: 'NEW WORD' })

  const print = () => {
    const bla1 = `Jst for`
    const bla2 = `testing hooks`
    return `${bla1} ${bla2}`
  }

  return (
    <div className="content counter-wrapper" data-test="component-counter">
      <h3>
        The count is <span data-test="count">{count}</span> ({print()})
      </h3>
      <button data-test="add-button" className="btn" onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button data-test="subtract-button" className="btn" onClick={() => setCount(prev => (prev === 0 ? 0 : prev - 1))}>
        Subtract
      </button>
      <p>
        State from useReducer - <b data-test="state">{state.word}</b>{' '}
        {state.word === 'INIT' && (
          <button data-test="dispatch-button" onClick={() => changeState()}>
            dispatch
          </button>
        )}
      </p>
    </div>
  )
}
