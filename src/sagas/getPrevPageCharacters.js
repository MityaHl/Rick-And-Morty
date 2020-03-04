import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putCharacters, putInfo } from '../store/actions/characters'

function lastPageCharacters (url) {
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
      }    
    )
}

function * putData (action) {
  try {
    const characters = yield call(lastPageCharacters, action.payload)
    yield put(putCharacters(characters.results))
    yield put(putInfo(characters.info))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLastPageCharacters () {
  yield takeEvery('GET_LAST_PAGE_CHARACTERS', putData)
}