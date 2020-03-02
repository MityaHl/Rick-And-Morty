import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getCharacter } from 'rickmortyapi'

import { putCharacters } from '../store/actions/characters'

function allCharacters () {
  // const data =  await getCharacter()
  // return data
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
      }    
    )
    .catch(error => {
      console.log(error)
    })
}

function * putData () {
  try {
    const characters = yield call(allCharacters)
    yield put(putCharacters(characters))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoad () {
  yield takeEvery('GET_CHARACTERS', putData)
}