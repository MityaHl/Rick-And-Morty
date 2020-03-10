import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  oneCharacter: {
    float: 'left',
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '70vh',
  },
  oneCharacterBlock: {
    width: '80%',
    height: '80%',
    marginTop: '25px',
    borderRadius: '5px',
    overflowY: 'scroll',
    border: '1px solid #fff',
    backgroundColor: 'rgba(122, 122, 122, 0.9)',
    display: 'flex',
    flexDirection: 'column',
  },
  mainInfo: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  profileImage: {
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
  },
  profileInfo: {
    width: '55%',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '10px',
    '@media (max-width: 1900px)': {
      width: '150px',
      height: '150px',
    },
  },
  nameBlock: {
    display: 'flex',
    fontSize: '30px',
    justifyContent: 'center',
    '@media (max-width: 1900px)': {
      fontSize: '20px',
    },
  },
  listItem: {
    display: 'flex',
    marginTop: '8px',
    fontSize: '17px',
    justifyContent: 'center',
    '@media (max-width: 1900px)': {
      fontSize: '13px',
    },
  },
  episodes: {
    marginTop: '20px',
  },
  episodesBlockTitle: {
    display: 'flex',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '25px',
    '@media (max-width: 1900px)': {
      fontSize: '17px',
    },
  },
  episodesList: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  },
  oneEpisode: {
    marginTop: '5px',
    marginLeft: '10px',
    '@media (max-width: 1900px)': {
      fontSize: '13px',
    },
  },
})
