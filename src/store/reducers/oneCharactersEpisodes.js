export default function oneCharacterEpisodes (state = [], action) {
  switch (action.type) {
    case 'PUT_ONE_CHARACTER_EPISODES': return action.payload

    default: return state
  }
}