import { connect } from 'react-redux'

import Lists from './component'
import { getCharacters } from '../../../store/actions/characters'

const mapStateToProps = state => ({
  list: state.characters
})

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)