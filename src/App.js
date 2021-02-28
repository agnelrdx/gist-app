import React from 'react'
import Header from './components/Header/Header'
import GistCard from './components/GistCard/GistCard'
import Sidebar from './components/Sidebar/Sidebar'
import './assets/app.css'

export default () => {
  return (
    <div className="App" data-test="component-app">
      <Header />

      <div className="content">
        <GistCard />
        <Sidebar />
      </div>
    </div>
  )
}
