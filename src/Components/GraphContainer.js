import React, { useContext, useState, useEffect } from 'react'
import Graph from './Graph'
import { nodesList, edgeList } from '../graphData'
import axios from 'axios';
import { FoodContext } from '../reducers/foodReducer.js'

function GraphContainer(){
  const [state, dispatch] = useContext(FoodContext);

  return (
      <div className="graph-container">
        <Graph
          nodes={state.foodItems}
          links={state.links}
           />
      </div>
  )
}

export default GraphContainer;
