export const getEpisodes = () => ({
  type: 'GET_EPISODES',
})

export const putEpisodes = data => ({
  type: 'PUT_EPISODES',
  payload: data,
})

export const getAnotherPageEpisodes = data => ({
  type: 'GET_ANOTHER_PAGE_EPISODES',
  payload: data,
})

export const getOneEpisodeCharacters = arrOfCharacters => ({
  type: 'GET_ONE_EPISODE_CHARACTERS',
  payload: arrOfCharacters,
})

export const putOneEpisodeCharacters = data => ({
  type: 'PUT_ONE_EPISODE_CHARACTERS',
  payload: data,
})

export const putOneEpisode = data => ({
  type: 'PUT_ONE_EPISODE',
  payload: data,
})
