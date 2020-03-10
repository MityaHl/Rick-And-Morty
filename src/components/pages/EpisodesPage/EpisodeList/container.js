import { connect } from 'react-redux'

import EpisodeList from './component'
import { getAnotherPageEpisodes, putOneEpisode, getEpisodes } from '@/store/actions/episodes'

const mapStateToProps = state => ({
  list: state.episodes,
  nextPage: state.info.next,
  prevPage: state.info.prev,
})

const mapDispatchToProps = dispatch => ({
  getEpisodes: () => dispatch(getEpisodes()),
  getAnotherPageEpisodes: url => dispatch(getAnotherPageEpisodes(url)),
  putOneEpisode: episode => dispatch(putOneEpisode(episode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList)
