import React, { createContext, useReducer } from 'react';

const initialState = {
  currentUser: null,
  foodItems: [],
  links: []
};





const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state,action) => {
    switch(action.type) {
      case 'GET_ITEMS':
        const newState = {
          ...state,
          foodItems: action.foodItems
        }

        return newState;
      case 'ADD_ITEM':
        const newState = []//insert post request here
        return newState;
      case 'DELETE_ITEM':
        const newState = []
        return newState;
      case 'USER_SIGNIN':
        const newState = []//insert user login here
        return newState;
      case 'GET_COMMENTS':
        const newState = []//
        return newState;
      case 'ADD_COMMENT':
        const newState = []
        return newState;
      case 'DELETE_COMMENT':
        const newState = [];
        return newState;
      default:
        throw new Error();
      };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
