import React from 'react';
import GraphContainer from './GraphContainer'
import ModalButtonContainer from './ModalButtons'

function AppContainer(){
  return (
    <div className="main-container">
      <GraphContainer />
      <ModalButtonContainer />
    </div>
  )
}

export default AppContainer
