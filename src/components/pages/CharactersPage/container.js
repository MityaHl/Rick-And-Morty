import { connect } from 'react-redux'

import CharactersPage from './component'
import { getCharacters } from '@/store/actions/characters'

const mapStateToProps = state => ({
  character: state.oneCharacter,
  allCharacters: state.characters,
})

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage)
