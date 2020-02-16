import React, { Component, useEffect, useState } from 'react';
import Burger from '../assets/img/burger.jpg';
import FoodDetails from './FoodDetails';
import { Box, Layer } from 'grommet';
import * as d3 from 'd3';

const height = 900;
const width = 1200;

const color = "#222";

class Graph extends Component {

  state = {
    nodes: [],
    links: []
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(!nextProps.nodes) return null;
    let { nodes, links } = nextProps;
    console.log(nodes)
    nodes = nodes.map(d => Object.create(d));
    links = links.map(d => Object.create(d));

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 4, height / 4));

    simulation
      .nodes(nodes)

    simulation.force("link")
      .links(links);

    return { nodes, links }

  }

  componentDidMount() {
    this.cxt = this.refs.canvas.getContext("2d");
    // this.drawNodes();
    // this.drawLinks();
    console.log(this.state.nodes)
    this.cxt.clearRect(0, 0, width, height);

    this.cxt.beginPath();
    this.drawLinks();
    this.cxt.strokeStyle = "#555";
    this.cxt.stroke();

    this.cxt.beginPath();
    this.drawNodes();
    this.cxt.fill();
    this.cxt.strokeStyle = "#f32211";
    this.cxt.stroke();
  }


  drawLinks() {
    this.state.links.forEach(d => {
      this.cxt.moveTo(d.source.x, d.source.y);
      this.cxt.lineTo(d.target.x, d.target.y);
    });
  }

  drawNodes() {
    this.state.nodes.forEach(d => {
      this.cxt.moveTo(d.x + 5, d.y);
      this.cxt.arc(d.x, d.y, 5, 0, 2 * Math.PI);
    })

  }

  // const [showFoodModal, setFoodModal] = useState(false)



  // useEffect(() => {
  //
  //
  //   console.log(nodes)
  //   console.log(links)
  //
  //   // simulation.force("link")
  //   //   .links(links);
  //
  // });
  render() {
    return (
      <canvas
        ref="canvas"
        height={height}
        width={width}
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
        />

    )
  }

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
