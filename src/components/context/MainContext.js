export const defaultState = {
  language: 'es',
  darkMode: true,
  isLoggedIn: false,
  username: 'anonymous',
  userID: ''
}

export default function getInitialState () {
  return defaultState
}

export function saveContextState (newcontextState) {
  // salva dentro de localstorage
  localStorage.setItem('contextState', JSON.stringify(newcontextState))
}

export function Reducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true }
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, username: 'anonymous', userID: '' }
    case 'SETLANGUAGE':
      return { ...state, language: action.language }
    case 'SETUSERNAME':
      return { ...state, username: action.username }
    case 'SETUSERID':
      return { ...state, userID: action.userID }
    // Add more cases as needed to update specific properties of the user data
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
