import React, { useContext } from 'react'
import Graph from './Graph';
import { Box } from 'grommet';
import { FoodContext } from '../reducers/foodReducer.js'

function GraphContainer(){
  const [foodState, dispatch] = useContext(FoodContext);

  return (
      <Box
        width="large"
        margin={{
          "vertical": "0",
          "horizontal": "auto"
        }}>
        <Graph
          nodes={foodState.foodItems}
          links={foodState.links}
           />
       </Box>
  )
}

export default GraphContainer;
