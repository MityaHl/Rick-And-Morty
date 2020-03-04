export const getCharacters = () => ({
  type: 'GET_CHARACTERS',
})

export const putCharacters = data => ({
  type: 'PUT_CHARACTERS',
  payload: data,
})

export const putOneCharacter = data => ({
  type: 'PUT_ONE_CHARACTER',
  payload: data,
})

export const putInfo = data => ({
  type: 'PUT_INFO',
  payload: data,
})

export const getNextPageCharacters = data => ({
  type: 'GET_NEXT_PAGE_CHARACTERS',
  payload: data,
})

export const getOneCharacterEpisodes = data => ({
  type: 'GET_ONE_CHARACTER_EPISODES',
  payload: data,
})

export const putOneCharacterEpisodes = data => ({
  type: 'PUT_ONE_CHARACTER_EPISODES',
  payload: data,
})

export const getLastPageCharacters = data => ({
  type: 'GET_LAST_PAGE_CHARACTERS',
  payload: data,
})