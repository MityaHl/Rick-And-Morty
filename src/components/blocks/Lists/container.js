import { connect } from 'react-redux'

import Lists from './component'
import { getCharacters, getNextPageCharacters, getLastPageCharacters, putOneCharacter } from '@/store/actions/characters'

const mapStateToProps = state => ({
  list: state.characters,
  nextPage: state.info.next,
  prevPage: state.info.prev,
})

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters()),
  getNextPageCharacters: url => dispatch(getNextPageCharacters(url)),
  getLastPageCharacters: url => dispatch(getLastPageCharacters(url)),
  putOneCharacter: character => dispatch(putOneCharacter(character)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)