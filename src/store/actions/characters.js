export const getCharacters = () => ({
  type: 'GET_CHARACTERS',
})

export const putCharacters = data => ({
  type: 'PUT_CHARACTERS',
  payload: data,
})