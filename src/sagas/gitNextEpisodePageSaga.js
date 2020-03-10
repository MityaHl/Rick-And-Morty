import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putInfo } from '../store/actions/characters'
import { putEpisodes } from '../store/actions/episodes'

function nextPageEpisodes (url) {
  if (url !== '') {
    url = url.slice(27)
  }
  return axios.get(url, {
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
      },
    )
}

function * putData (action) {
  try {
    const episodes = yield call(nextPageEpisodes, action.payload)
    yield put(putEpisodes(episodes.results))
    yield put(putInfo(episodes.info))
  } catch (error) {
    console.log(error)
  }
}

export function * watchNextPageEpisodes () {
  yield takeEvery('GET_ANOTHER_PAGE_EPISODES', putData)
}
