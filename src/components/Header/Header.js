import React, { useState, useContext } from 'react'
import _ from 'lodash'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { useStyles } from './HeaderStyle'
import { gistContext } from '../../utils/gistContext'
import { fetchGistByUsername } from '../../utils/api'

export default () => {
  const [inputError, setInputError] = useState(false)
  const [appData, setAppData] = useContext(gistContext)
  const classes = useStyles()

  const handleKeyDown = async e => {
    if (e.key === 'Enter') {
      /* Validate input entry */
      if (e.target.value === '') {
        setInputError(true)
        return false
      }

      setAppData({ ...appData, listLoading: true })
      const res = await fetchGistByUsername(e.target.value)
      if (res.error || (Array.isArray(res) && res.length === 0)) {
        const errorMsg = res.error ? 'Invalid username entered!!' : 'No Gist records found!!'
        setAppData({ ...appData, list: [], listLoading: false, error: { status: true, msg: errorMsg } })
        return false
      }

      setAppData({
        ...appData,
        listLoading: false,
        list: res,
        error: { status: false, msg: '' },
        recentSearch: _.uniqBy(
          [
            ...appData.recentSearch,
            {
              username: res[0].owner.login,
              avatar: res[0].owner.avatar_url || ''
            }
          ],
          'username'
        )
      })
    }
  }

  return (
    <div data-test="component-header">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <h1 data-test="app-title" className={classes.title}>
            GIST APP {String(inputError)}
          </h1>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              error={inputError}
              onChange={() => setInputError(false)}
              onKeyDown={e => handleKeyDown(e)}
              placeholder="Search by Username"
              classes={{ input: classes.input }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
