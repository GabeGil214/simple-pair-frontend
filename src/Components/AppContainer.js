import React from 'react';
import GraphContainer from './GraphContainer'
import ModalButtonContainer from './ModalButtons'
import { FoodContextProvider } from '../reducers/foodReducer.js'

function AppContainer(){
  return (
    <FoodContextProvider>
      <div className="main-container">
        <GraphContainer />
        <ModalButtonContainer />
      </div>
    </FoodContextProvider>
  )
}

export default AppContainer
