import { combineReducers } from 'redux'

import characters from './characters'
import info from './info'
import episodes from './episodes'
import oneCharacter from './oneCharacter'
import oneEpisode from './oneEpisode'
import oneCharacterEpisodes from './oneCharactersEpisodes'
import oneEpisodeCharacters from './oneEpisodeCharacters'

export default combineReducers({
  characters,
  oneEpisodeCharacters,
  info,
  episodes,
  oneEpisode,
  oneCharacter,
  oneCharacterEpisodes,
})
