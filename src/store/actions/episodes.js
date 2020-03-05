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