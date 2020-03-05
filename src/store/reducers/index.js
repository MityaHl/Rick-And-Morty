import { combineReducers } from 'redux'

import characters from './characters'
import info from './info'
import episodes from './episodes'
import oneCharacter from './oneCharacter'
import oneCharacterEpisodes from './oneCharactersEpisodes'

export default combineReducers({
  characters,
  info,
  episodes,
  oneCharacter,
  oneCharacterEpisodes,
})