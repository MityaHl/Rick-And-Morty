import { connect } from 'react-redux'

import OneCharacter from './component'
import { getOneCharacterEpisodes } from '@/store/actions/characters'

const mapStateToProps = state => ({
  character: state.oneCharacter,
  characterEpisodes: state.oneCharacterEpisodes,
})

const mapDispatchToProps = dispatch => ({
  getOneCharacterEpisodes: character => dispatch(getOneCharacterEpisodes(character)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OneCharacter)
