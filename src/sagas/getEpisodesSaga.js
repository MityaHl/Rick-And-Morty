import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putInfo } from '../store/actions/characters'
import { putEpisodes } from '../store/actions/episodes'

function allEpisodes () {
  return axios.get('/api/episode', {
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })
    .then(
      response => {
        return response.data
      }    
    )
}

function * putData () {
  try {
    const episodes = yield call(allEpisodes)
    yield put(putEpisodes(episodes.results))
    yield put(putInfo(episodes.info))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoadEpisodes () {
  yield takeEvery('GET_EPISODES', putData)
}