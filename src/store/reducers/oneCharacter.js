export default function oneCharacter (state = [], action) {
  switch (action.type) {
    case 'PUT_ONE_CHARACTER': return action.payload

    default: return state
  }
}
