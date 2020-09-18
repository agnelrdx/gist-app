import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import { useStyles } from './GistCardStyle'
import { fetchForkedList } from '../../utils/api'

export default props => {
  const [forkData, setForkData] = useState({ loading: true, data: [] })

  const getForkData = async url => {
    const res = await fetchForkedList(url)
    setForkData({ loading: false, data: res })
  }

  useEffect(() => {
    getForkData(props.data.forks_url)
  }, [props])

  const classes = useStyles()

  return (
    <div className={classes.forkRoot}>
      {forkData.loading && (
        <>
          <CircularProgress className={classes.forkLoader} color="secondary" />
          <span>Loading Forked Users...</span>
        </>
      )}

      {!forkData.loading && forkData.data.length === 0 && <p>No Forked Users!!</p>}

      {!forkData.loading && forkData.data.length > 0 && (
        <AvatarGroup max={4}>
          {forkData.data.map((v, k) => (
            <a title={v.owner.login} key={k} href={v.git_pull_url} rel="noopener noreferrer" target="_blank">
              <Avatar className={classes.forkAvatar} alt={v.owner.login} src={v.owner.avatar_url}>
                {v.owner.login.charAt(0).toUpperCase()}
              </Avatar>
            </a>
          ))}
        </AvatarGroup>
      )}
    </div>
  )
}
