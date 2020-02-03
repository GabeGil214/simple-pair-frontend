import React from 'react'
import Graph from './Graph'

function GraphContainer(){
  // useEffect(){
  //   cytoscape.use( fcose );
  //
  // }
  return (
    <div className="graph-container row">
      <Graph />
    </div>
  )
}

export default GraphContainer;
