import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './GistCardStyle'
import { gistContext } from '../../utils/gistContext'
import Content from './Content'
import Loader from '../Loader/Loader'
import Card from './Card'

export default () => {
  const classes = useStyles()
  const [appData] = useContext(gistContext)

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={appData.list.length === 0 ? classes.gridContent : classes.gridCard}>
        {appData.list.length === 0 && !appData.listLoading && <Content /> /* Page Content */}

        {appData.listLoading && <Loader /> /* Loader */}

        {appData.list.length > 0 && !appData.listLoading && <Card /> /* Gist List */}
      </Grid>
    </div>
  )
}
