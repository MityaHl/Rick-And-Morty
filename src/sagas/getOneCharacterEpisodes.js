import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putOneCharacterEpisodes } from '../store/actions/characters'

function allEpisodes (episodes) {
  return axios.get('/api/episode/' + episodes, {
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
      }    
    )
}

function * putData (action) {
  try {
    const episodes = yield call(allEpisodes, action.payload)
    yield put(putOneCharacterEpisodes(episodes))
  } catch (error) {
    console.log(error)
  }
}

export function * watchOneCharactersEpisodes () {
  yield takeEvery('GET_ONE_CHARACTER_EPISODES', putData)
}