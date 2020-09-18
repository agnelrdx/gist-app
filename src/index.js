import React from 'react'
import ReactDOM from 'react-dom'
import { GistProvider } from './utils/gistContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GistProvider>
      <App />
    </GistProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
