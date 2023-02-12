import { useEffect } from 'react';
import { createContext, useReducer } from 'react';

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'SIGNIN', payload: user })
    }
  }, [])

  console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}