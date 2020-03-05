import { all } from 'redux-saga/effects'
import { watchLoad } from './getCharactersSaga'
import { watchNextPageCharacters } from './getNextPageCharactersSaga'
import { watchLastPageCharacters } from './getPrevPageCharacters'
import { watchOneCharactersEpisodes } from './getOneCharacterEpisodes'
import { watchLoadEpisodes } from './getEpisodesSaga'
import { watchNextPageEpisodes } from './gitNextEpisodePageSaga'

export default function * rootSaga () {
  yield all([
    watchLoad(),
    watchNextPageCharacters(),
    watchLastPageCharacters(),
    watchOneCharactersEpisodes(),
    watchLoadEpisodes(),
    watchNextPageEpisodes(),
  ])
}