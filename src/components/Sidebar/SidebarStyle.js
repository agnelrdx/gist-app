import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#f9f9f9',
    border: 'none',
    maxWidth: '325px',
    minWidth: '325px',
    height: '350px',
    overflowY: 'scroll',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
    [theme.breakpoints.down('767')]: {
      minWidth: '250px'
    }
  },
  content: {
    padding: '15px 15px 0 !important'
  },
  title: {
    fontSize: '24px',
    fontWeight: '500',
    padding: '0 0 10px',
    margin: '0 0 15px',
    borderBottom: '1px dotted #9b9b9b'
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0 0 20px',
    '&:hover img': {
      transform: 'scale(1.2)'
    },
    '&:hover .MuiAvatar-circle': {
      border: '2px solid #1976d2'
    }
  },
  avatar: {
    width: '50px',
    height: '50px',
    margin: '0 12px 0 0',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
    border: '2px solid #f9f9f9',
    transition: theme.transitions.create('border'),
    '& img': {
      transition: theme.transitions.create('transform')
    }
  },
  user: {
    fontWeight: '500',
    fontSize: '16px'
  }
}))
