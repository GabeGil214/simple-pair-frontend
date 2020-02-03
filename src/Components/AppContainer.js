import React from 'react';
import GraphContainer from './GraphContainer'
import ModalButtons from './ModalButtons'

function AppContainer(){
  return (
    <div className="main-container">
      <GraphContainer />
      <ModalButtons />
    </div>
  )
}

export default AppContainer
