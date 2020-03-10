export default function oneEpisode (state = [], action) {
  switch (action.type) {
    case 'PUT_ONE_EPISODE': return action.payload

    default: return state
  }
}
