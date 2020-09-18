import { fade, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    background: '#1976d2',
    padding: '3px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '10px 0'
    }
  },
  title: {
    flexGrow: 1,
    fontSize: '26px',
    fontWeight: '300',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  search: {
    borderRadius: '5px',
    position: 'relative',
    backgroundColor: fade('#000', 0.15),
    '&:hover': {
      backgroundColor: fade('#000', 0.25)
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    left: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputInput: {
    borderRadius: '5px',
    color: '#fff',
    height: '26px',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch'
      }
    }
  }
}))
