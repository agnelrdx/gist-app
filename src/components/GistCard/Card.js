import React, { useContext } from 'react'
import _ from 'lodash'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import { useStyles } from './GistCardStyle'
import { gistContext } from '../../utils/gistContext'
import ForkContent from './ForkContent'

export default () => {
  const classes = useStyles()
  const [appData] = useContext(gistContext)

  return appData.list.map((v, k) => {
    const file = _.head(Object.keys(v.files))
    return (
      <Grid key={k} item xs={12} sm={3}>
        <Paper className={classes.paper}>
          <h4 className={classes.cardTitle}>Gist Snippet {k + 1}</h4>
          <p>Created: {v.created_at.split('T')[0]}</p>
          <p>Description: {_.get(v, 'description', '') === '' ? 'NA' : v.description}</p>
          <p>
            Public:
            <span className={/true/.test(v.public) ? classes.green : classes.red}>{/true/.test(v.public) ? 'Yes' : 'No'}</span>
          </p>
          <p>
            File:
            <a title="View File" href={v.git_pull_url} rel="noopener noreferrer" target="_blank">
              {`${v.files[file].filename}`}
            </a>
          </p>
          <Chip label={v.files[file].type} />
          <ForkContent data={v} />
        </Paper>
      </Grid>
    )
  })
}
