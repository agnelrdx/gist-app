import React, { createContext, useState } from 'react'
import { initialAppData } from './config'

export const gistContext = createContext()

export const GistProvider = props => {
  /* Set App data with defaults */
  const [appData, setAppData] = useState(initialAppData)

  return <gistContext.Provider value={[appData, setAppData]}>{props.children}</gistContext.Provider>
}
