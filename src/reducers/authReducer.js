import React, { useReducer, createContext } from 'react';

export const AuthContext = createContext({})

const initialAuthState = {
    isLoggedIn: false,
    id: '',
    username: '',
    key: '',
    error: ''
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
                id: action.payload.id,
                username: action.payload.username,
                key: action.payload.key,
                error: ''
            };
        case 'LOGIN_ERROR':
            return {
                isLoggedIn: false,
                username: '',
                error: action.payload.error
            };
        case 'LOGOUT':
            return {
                isLoggedIn: false,
                username: '',
                key: '',
                error: ''
            };
        default:
            return state;
    }
};


export const AuthContextProvider = props => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  )
}
