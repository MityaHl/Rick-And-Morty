import { connect } from 'react-redux'

import OneEpisode from './component'
import { getOneEpisodeCharacters } from '@/store/actions/episodes'

const mapStateToProps = state => ({
  episode: state.oneEpisode,
  oneEpisodeCharacters: state.oneEpisodeCharacters,
})

const mapDispatchToProps = dispatch => ({
  getOneEpisodeCharacters: episode => dispatch(getOneEpisodeCharacters(episode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OneEpisode)
