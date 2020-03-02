import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  headerMenu: {
    float: 'right',
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',    
  },
  link: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    width: '25%',
    height: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid black',
    color: 'black',
    borderRadius: '5px',
    ':hover': {
      backgroundColor: 'grey',
  }
  },
})