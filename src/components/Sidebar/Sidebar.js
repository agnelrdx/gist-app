import React, { useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import { useStyles } from './SidebarStyle'
import { gistContext } from '../../utils/gistContext'
import { fetchGistByUsername } from '../../utils/api'

export default () => {
  const classes = useStyles()
  const [appData, setAppData] = useContext(gistContext)

  const handleClick = async username => {
    setAppData({ ...appData, listLoading: true })

    const res = await fetchGistByUsername(username)
    if (res.error || (Array.isArray(res) && res.length === 0)) {
      const errorMsg = res.error ? 'Invalid username entered!!' : 'No Gist records found!!'
      setAppData({ ...appData, list: [], listLoading: false, error: { status: true, msg: errorMsg } })
      return false
    }

    setAppData({ ...appData, listLoading: false, list: res, error: { status: false, msg: '' } })
  }

  return (
    <div data-test="component-sidebar">
      <Card className={`${classes.root} overflow-style`}>
        <CardContent className={classes.content}>
          <h2 className={classes.title}>Recent Search</h2>

          {appData.recentSearch
            .map((v, k) => (
              <div data-test={`recent-search-row-${k}`} key={k} className={classes.list} onClick={() => handleClick(v.username)}>
                <Avatar className={classes.avatar} alt={v.username} src={v.avatar}>
                  {v.username.charAt(0).toUpperCase()}
                </Avatar>
                <span className={classes.user}>
                  {v.username.charAt(0).toUpperCase()}
                  {v.username.substring(1)}
                </span>
              </div>
            ))
            .reverse()}
        </CardContent>
      </Card>
    </div>
  )
}
