import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  lists: {
    float: 'right',
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 'calc(100vh - 10vh)',
  },
  listBlock: {
    width: '80%',
    height: '80%',
    borderRadius: '5px',
    overflowY: 'scroll',
    border: '1px solid #fff',
  },
  character: {
    width: '100%',
    borderTop: '1px solid #fff',
    borderBottom: '1px solid #fff',
    color: '#fff',
    fontSize: '30px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(122, 122, 122, 0.9)',
    height: '120px',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  imageBlock: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBlock: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
  },
  listItem: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonsBlock: {
    width: '80%',
    display: 'flex',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    fontSize: '25px',
    width: '40%',
    height: '80%',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '5px',
    backgroundColor: 'rgba(122, 122, 122, 1)',
  },
  numPage: {
    width: '10%',
    height: '80%',
    color: '#fff',
    fontSize: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #fff',
    borderRadius: '5px',
    backgroundColor: 'rgba(122, 122, 122, 1)',
  },
})
