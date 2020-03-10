import { connect } from 'react-redux'

import EpisodesPage from './component'

const mapStateToProps = state => ({
  episode: state.oneEpisode,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage)
