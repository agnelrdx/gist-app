import React, { useContext } from 'react'
import { useStyles } from './GistCardStyle'
import { gistContext } from '../../utils/gistContext'

export default () => {
  const classes = useStyles()
  const [appData] = useContext(gistContext)

  return (
    <>
      {appData.error.status && (
        <>
          <h3 className={classes.title}>{appData.error.msg}</h3>
          <p className={classes.note}>Try with few sample Ids (Developius, lebradley, mazudi)</p>
        </>
      )}

      {!appData.error.status && (
        <>
          <h3 className={classes.title}>Gist is an easy method to share snippets or excerpts of data with others</h3>
          <p className={classes.note}>Enter a valid username and press enter to get the list</p>
        </>
      )}
    </>
  )
}
