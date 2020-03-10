export default function oneEpisodeCharacters (state = false, action) {
  switch (action.type) {
    case 'PUT_ONE_EPISODE_CHARACTERS': return action.payload

    default: return state
  }
}
