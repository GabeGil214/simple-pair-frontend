import React, { useContext, useEffect } from 'react'
import NewGraph from './NewGraph';
import axios from 'axios';
import { Box } from 'grommet';
import Lottie from 'react-lottie';
import animationData from '../Lottie/9106-loading.json';
import { FoodContext } from '../reducers/foodReducer.js';
import PRODUCTION_URL from '../assets/config.js';

function GraphContainer(){
  const [foodState, dispatch] = useContext(FoodContext);

  const loadingAnimationOptions = {
     loop: true,
     autoplay: true,
     animationData: animationData,
     rendererSettings: {
       preserveAspectRatio: 'xMidYMid slice'
     }
   };


  useEffect(() => {

    const options = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }

      axios.get(PRODUCTION_URL + '/api/food/', options).then(response => {
        dispatch({
          type: 'GET_FOOD_ITEMS',
          payload: response.data.results
        });
      }).catch(error => {
        console.log(error.response);
      });

      axios.get(PRODUCTION_URL + '/api/links/', options).then(response => {
        dispatch({
          type: 'GET_LINKS',
          payload: response.data.results
        })

      }).catch(error => {
        console.log(error.response)
      });
  }, [])


  if(foodState.foodItems.length !== 0){
      return (
          <Box
            width="large"
            margin={{
              "vertical": "0",
              "horizontal": "auto"
            }}>
            <NewGraph
              nodes={foodState.foodItems}
              links={foodState.links}
               />
           </Box>
      )
    } else {
      return (
        <Lottie options={loadingAnimationOptions}
          height={400}
          width={400}
           />
       )
     }
  }

export default GraphContainer;
