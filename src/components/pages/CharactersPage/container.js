import { connect } from 'react-redux'

import CharactersPage from './component'

const mapStateToProps = state => ({
  character: state.oneCharacter,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage)