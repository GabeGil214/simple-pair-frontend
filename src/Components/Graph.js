import React, { useState } from 'react';
import Burger from '../assets/img/burger.jpg'
import FoodDetails from './FoodDetails'
import { Box, Layer } from 'grommet'


function Graph(){

  const [showFoodModal, setFoodModal] = useState(false)



  return(
    <Box className="col-xs-6 col-md-3">
      <div className="thumbnail node" onClick={() => setFoodModal(true)}>
        <img src={Burger} alt="Burger" />
          {showFoodModal && (
            <Layer
              onEsc={() => setFoodModal(false)}
              onClickOutside={() => setFoodModal(false)}
              >
              <div className="modal-container">
                <FoodDetails />
              </div>
            </Layer>
          )}
      </div>
    </Box>
  )
}

export default Graph;
