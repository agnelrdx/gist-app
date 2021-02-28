import React, { createContext, useState, useMemo } from 'react'
import { initialAppData } from './config'

export const gistContext = createContext()

export const GistProvider = props => {
  /* Set App data with defaults */
  const [appData, setAppData] = useState(initialAppData)

  const value = useMemo(() => [appData, setAppData], [appData])

  return (
    <gistContext.Provider value={value} {...props}>
      {props.children}
    </gistContext.Provider>
  )
}
