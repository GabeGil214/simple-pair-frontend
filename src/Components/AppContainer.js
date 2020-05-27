import React, { useContext } from 'react';
import GraphContainer from './GraphContainer'
import ModalButtonContainer from './ModalButtons'
import { AuthContext } from '../reducers/authReducer';
import { FoodContextProvider } from '../reducers/foodReducer.js'

function AppContainer(){
  const [state, dispatch] = useContext(AuthContext);

  return (
    <FoodContextProvider>
      <div className="main-container">
        <GraphContainer />
        {state.isLoggedIn && (
          <ModalButtonContainer />
        )}
      </div>
    </FoodContextProvider>
  )
}

export default AppContainer
