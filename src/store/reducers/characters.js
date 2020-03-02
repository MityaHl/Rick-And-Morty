export default function characters (state = [], action) {
  switch (action.type) {
    case 'PUT_CHARACTERS': return action.payload

    default: return state
  }
}