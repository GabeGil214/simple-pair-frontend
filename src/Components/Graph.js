import React, { useEffect, useState } from 'react';
import Burger from '../assets/img/burger.jpg'
import FoodDetails from './FoodDetails'
import { Box, Layer } from 'grommet'
import * as d3 from 'd3'


function Graph(props){
  const height = 600;
  const width = 1200;
  const color = "#222";
  const [nodes, setNodes] = useState(props.nodes.map(d => Object.create(d)));
  const [links, setLinks] = useState(props.links.map(d => Object.create(d)));
  // const [showFoodModal, setFoodModal] = useState(false)

  // const ticked = function() {
  //   context.clearRect(0, 0, width, height);
  //
  //   context.beginPath();
  //   props.links.forEach(drawLink);
  //   context.strokeStyle = "#555";
  //   context.stroke();
  //
  //   context.beginPath();
  //   nodes.forEach(drawNode);
  //   context.fill();
  //   context.strokeStyle = "#f32211";
  //   context.stroke();
  // }


  useEffect(() => {
    var simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 4, height / 2));

    console.log(nodes)
    console.log(links)

    simulation.nodes(nodes)
      // .on("tick", ticked);

    simulation.force("link")
      .links(links);

  });

  return (
    <div id="graph-div" height="600" width="100%">
      <svg height={height} width={width}>
        <g stroke="#222" strokeWidth="1.5">
          {nodes.map(d => (
            <circle key={d.index} cx={d.x} cy={d.y} r="5" fill={color} />
          ))}
        </g>
        <g stroke="#999" strokeOpacity=".6">
          {links.map(d => (
            <line key={d.index} x1={d.source.x} y1={d.source.y} x2={d.target.x} y2={d.target.y} />
          ))}
        </g>
      </svg>
    </div>
  )
  // return(
  //   <Box className="col-xs-6 col-md-3">
  //     <div className="thumbnail node" onClick={() => setFoodModal(true)}>
  //       <img src={Burger} alt="Burger" />
  //         {showFoodModal && (
  //           <Layer
  //             onEsc={() => setFoodModal(false)}
  //             onClickOutside={() => setFoodModal(false)}
  //             >
  //             <div className="modal-container">
  //               <FoodDetails />
  //             </div>
  //           </Layer>
  //         )}
  //     </div>
  //   </Box>
  // )
}

export default Graph;
