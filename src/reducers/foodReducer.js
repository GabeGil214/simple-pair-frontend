import React, { useReducer, createContext } from 'react';
import axios from 'axios';

export const FoodContext = createContext();

const initialFoodState = {
    foodItems: [],
    links: []
};

const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }

const fetchData = async () => {
  await axios.get('http://127.0.0.1:8000/api/food/', options).then(response => {
    initialFoodState.foodItems = response.data.results
  }).catch(error => {
    console.log(error.response)
  });

  await axios.get('http://127.0.0.1:8000/api/links/', options).then(response => {
    initialFoodState.links = response.data.results
  }).catch(error => {
    console.log(error.response)
  });

    // initialFoodState.links = [
    //   {
    //     id: 1,
    //     owner: 1,
    //     source: 1,
    //     target: 2,
    //   },
    //   {
    //     id: 2,
    //     owner: 1,
    //     source: 3,
    //     target: 4,
    //   }
    // ]

};

fetchData();

const foodReducer = (state, action) => {
    switch (action.type) {
        // case 'GET_FOOD_ITEMS':
        //     return {
        //         foodItems: action.foodItems,
        //         links: action.links
        //     };
        case 'ADD_FOOD_ITEM':
            return {
                foodItems: [...state.foodItems, action.payload],
                links: [...state.links]
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
