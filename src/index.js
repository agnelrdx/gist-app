import React from 'react'
import ReactDOM from 'react-dom'
import { GistProvider } from './utils/gistContext'
import App from './App'
import Counter from './Counter'

ReactDOM.render(
  <React.StrictMode>
    <GistProvider>
      <App />
    </GistProvider>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
)
