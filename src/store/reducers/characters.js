export default function characters (state = null, action) {
  switch (action.type) {
    case 'PUT_CHARACTERS': return action.payload

    default: return state
  }
}
