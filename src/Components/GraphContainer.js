import React, { useEffect, useState } from 'react'
import Graph from './Graph'
import { nodesList, edgeList } from '../graphData'

function GraphContainer(){
  // const [nodesDict, setNodesDict] = useState(nodesList.reduce((dict, node) => {
  //         dict[node.id] = node;
  //         return dict;
  //     }, {}))
  //
  // useEffect(() => {
  //
  //      edgeList.forEach((link) => {
  //           link.id1 = nodesDict[link.id1];
  //           link.id2 = nodesDict[link.id2];
  //       });
  // });

  return (
    <div className="graph-container">
      <Graph
        nodes={nodesList}
        links={edgeList}
         />
    </div>
  )
}

export default GraphContainer;
