import React, { Component, useEffect, useState } from 'react';
import Burger from '../assets/img/burger.jpg';
import FoodDetails from './FoodDetails';
import { Box, Layer } from 'grommet';
import * as d3 from 'd3';

const height = 1200;
const width = 600;

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

    var simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(50).strength(25))
      .force("charge", d3.forceManyBody().strength(150))
      .force("center", d3.forceCenter(width/2, height/2));

    simulation
      .nodes(nodes)

    simulation.force("link")
      .links(links);

    return { nodes, links }

  }

  // componentDidMount() {
  //   this.cxt = this.refs.canvas.getContext("2d");
  //   // this.drawNodes();
  //   // this.drawLinks();
  //   console.log(this.state.nodes)
  //   this.cxt.clearRect(0, 0, width, height);
  //
  //   this.cxt.beginPath();
  //   this.drawLinks();
  //   this.cxt.strokeStyle = "#555";
  //   this.cxt.stroke();
  //
  //   this.cxt.beginPath();
  //   this.drawNodes();
  //   this.cxt.fill();
  //   this.cxt.strokeStyle = "#f32211";
  //   this.cxt.stroke();
  // }
  //
  //
  // drawLinks() {
  //   this.state.links.forEach(d => {
  //     this.cxt.moveTo(d.source.x, d.source.y);
  //     this.cxt.lineTo(d.target.x, d.target.y);
  //   });
  // }
  //
  // drawNodes() {
  //   this.state.nodes.forEach(d => {
  //     this.cxt.moveTo(d.x + 5, d.y);
  //     this.cxt.arc(d.x, d.y, 5, 0, 2 * Math.PI);
  //   })

  // }

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
  // render() {
  //   return (
  //     <canvas
  //       ref="canvas"
  //       height={height}
  //       width={width}
  //       style={{
  //         width: `${width}px`,
  //         height: `${height}px`
  //       }}
  //       />
  //
  //   )
  // }
  render(){
    return(
        <svg viewBox={`${-height/2}, ${-width/2}, ${height}, ${width}`}>
          <g stroke="#222299" strokeOpacity="0.9" strokeWidth="2">
            {this.state.links.map(d => (
              <line x1={d.source.x} y1={d.source.y} x2={d.target.x} y2={d.target.y}/>
            ))}
          </g>
          <g fill="#fff" stroke="#000" strokeWidth="1.5">
            {this.state.nodes.map(d => (
              <circle r="5.5" cx={d.x} cy={d.y}/>
            ))}
          </g>
        </svg>
    )
  }

}

export default Graph;
