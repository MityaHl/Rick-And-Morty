import { all } from 'redux-saga/effects'
import { watchLoad } from './getCharactersSaga'
import { watchNextPageCharacters } from './getNextPageCharactersSaga'
import { watchLastPageCharacters } from './getPrevPageCharacters'
import { watchOneCharactersEpisodes } from './getOneCharacterEpisodes'
import { watchLoadEpisodes } from './getEpisodesSaga'
import { watchNextPageEpisodes } from './gitNextEpisodePageSaga'
import { watchOneEpisodeCharacterss } from './getOneEpisodeCharacters'

export default function * rootSaga () {
  yield all([
    watchLoad(),
    watchOneEpisodeCharacterss(),
    watchNextPageCharacters(),
    watchLastPageCharacters(),
    watchOneCharactersEpisodes(),
    watchLoadEpisodes(),
    watchNextPageEpisodes(),
  ])
}
