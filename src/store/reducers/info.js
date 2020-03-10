export default function info (state = [], action) {
  switch (action.type) {
    case 'PUT_INFO': return action.payload

    default: return state
  }
}
