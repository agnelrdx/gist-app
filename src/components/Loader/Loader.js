import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { useStyles } from './LoaderStyle'

export default () => {
  const classes = useStyles()
  const boxes = new Array(8).fill('')

  return (
    <div data-test="loader" className={classes.loader}>
      {boxes.map((v, k) => (
        <div data-test="loader-skeleton" key={k} className={classes.svg}>
          <Skeleton variant="text" width={110} height={40} />
          <Skeleton variant="text" width={150} height={30} />
          <Skeleton variant="text" width={150} height={30} />
          <Skeleton variant="text" width={100} height={30} />
          <Skeleton variant="rect" width={180} height={40} />
        </div>
      ))}
    </div>
  )
}
