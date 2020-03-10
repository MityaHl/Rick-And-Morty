import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putCharacters, putInfo } from '../store/actions/characters'

function allCharacters () {
  return axios.get('/api/character', {
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

function * putData () {
  try {
    const characters = yield call(allCharacters)
    yield put(putCharacters(characters.results))
    yield put(putInfo(characters.info))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoad () {
  yield takeEvery('GET_CHARACTERS', putData)
}
