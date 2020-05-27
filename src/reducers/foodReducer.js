import React, { useReducer, createContext } from 'react';
import axios from 'axios';

const initialFoodState = {
    foodItems: [],
    links: []
};

export const FoodContext = createContext();

const foodReducer = (state, action) => {
    switch (action.type) {
        case 'GET_FOOD_ITEMS':
            return {
                foodItems: [...action.payload],
                links: [...state.links]
            };
        case 'ADD_FOOD_ITEM':
            return {
                foodItems: [...state.foodItems, action.payload],
                links: [...state.links]
            };
        case 'GET_LINKS':
          return {
            foodItems: [...state.foodItems],
            links: [
              ...state.links,
              ...action.payload
            ]
          };
        case 'ADD_LINK':
          return {
            foodItems: [...state.foodItems],
            links: [
              ...state.links,
              action.payload
            ]
          };
        case 'DELETE_LINK':
            return {
              ...state,
              links: state.links.filter((id) => id !== action.links.id)
            }
        case 'DELETE_FOOD_ITEM':
            return {
              ...state,
              foodItems: state.foodItems.filter((id) => id !== action.foodItems.id)
            };
        default:
            return state;
    }
};


export const FoodContextProvider = props => {
  const [state, dispatch] = useReducer(foodReducer, initialFoodState);

  return (
    <FoodContext.Provider value={[state, dispatch]}>
      {props.children}
    </FoodContext.Provider>
  )
}
