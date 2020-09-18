import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  loader: {
    padding: '15px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  svg: {
    flexGrow: '1',
    margin: '15px 15px 0 0',
    border: '1px solid #ddd',
    padding: '10px 15px 15px',
    borderRadius: '5px'
  }
})
