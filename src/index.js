import React from 'react'
import ReactDOM from 'react-dom'
import { GistProvider } from './utils/gistContext'
import App from './App'
import Counter from './Counter'

export const reactStrictMode = (
  <React.StrictMode>
    <GistProvider>
      <App />
    </GistProvider>
    <Counter />
  </React.StrictMode>
)

export const rootElement = document.getElementById('root')

ReactDOM.render(reactStrictMode, rootElement)
