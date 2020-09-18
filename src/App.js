import React from 'react'
import Header from './components/Header/Header'
import GistCard from './components/GistCard/GistCard'
import Sidebar from './components/Sidebar/Sidebar'
import './assets/app.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <GistCard />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
