import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    flexGrow: 2,
    background: '#f9f9f9',
    border: 'none',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
    margin: '0 20px 0 0',
    padding: '15px 15px 0 !important',
    borderRadius: '3px'
  },
  gridContent: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  gridCard: {
    padding: '5px 0 25px'
  },
  title: {
    fontSize: '24px',
    margin: '0 0 10px',
    fontWeight: '500',
    textAlign: 'center'
  },
  note: {
    fontSize: '18px',
    textAlign: 'center'
  },
  paper: {
    padding: '15px',
    wordBreak: 'break-all',
    '& p': {
      fontSize: '14px',
      lineHeight: '22px',
      marginBottom: '10px',
      '& a': {
        marginLeft: '5px',
        fontWeight: 500
      },
      '& span': {
        color: '#fff',
        padding: '4px 10px',
        borderRadius: '4px',
        marginLeft: '10px',
        fontSize: '12px',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'
      }
    }
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '10px'
  },
  green: {
    background: '#0c970c'
  },
  red: {
    background: '#c20000'
  },
  forkRoot: {
    display: 'flex',
    fontSize: '12px',
    margin: '15px 0 0',
    alignItems: 'center',
    '& span': {
      marginLeft: '10px'
    },
    '& p': {
      fontSize: '12px',
      margin: 0
    }
  },
  forkLoader: {
    width: '20px !important',
    height: '20px !important'
  },
  forkAvatar: {
    width: '35px !important',
    height: '35px !important'
  }
})
