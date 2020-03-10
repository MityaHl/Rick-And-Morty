import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putOneEpisodeCharacters } from '../store/actions/episodes'

function allCharacters (episodes) {
  return axios.get('/api/character/' + episodes, {
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })
    .then(
      response => {
        if (response.data instanceof Array) {
          return response.data
        } else {
          return [response.data]
        }
      },
    )
}

function * putData (action) {
  try {
    const characters = yield call(allCharacters, action.payload)
    yield put(putOneEpisodeCharacters(characters))
  } catch (error) {
    console.log(error)
  }
}

export function * watchOneEpisodeCharacterss () {
  yield takeEvery('GET_ONE_EPISODE_CHARACTERS', putData)
}
