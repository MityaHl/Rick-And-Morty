import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { putCharacters, putInfo } from '../store/actions/characters'

function nextPageCharacters (url) {
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
    const characters = yield call(nextPageCharacters, action.payload)
    yield put(putCharacters(characters.results))
    yield put(putInfo(characters.info))  } catch (error) {
    console.log(error)
  }
}

export function * watchNextPageCharacters () {
  yield takeEvery('GET_NEXT_PAGE_CHARACTERS', putData)
}