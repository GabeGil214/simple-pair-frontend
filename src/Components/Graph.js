import React, { Component, useEffect, useState } from 'react';
import FoodDetails from './FoodDetails';
import { Box, Layer, Text } from 'grommet';
import * as d3 from 'd3';
import styled from 'styled-components'


const height = 600;
const width = 600;

const scale = d3.scaleOrdinal(d3.schemeCategory10);

const color = "#222";

const NodeLabel = styled.text`
      font-size: 8px;
    `;

class Graph extends Component {

  state = {
    nodes: [],
    links: []
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(!nextProps.nodes) return null;
    let { nodes, links } = nextProps;

    nodes = nodes.map(d => Object.create(d))
    links = links.map(d => Object.create(d))

    let simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(50))
      .force("charge", d3.forceManyBody().strength(2))
      .force("center", d3.forceCenter(width/2, height/2));

    simulation
      .nodes(nodes)

    simulation.force("link")
      .links(links);

    console.log(nodes)
    console.log(links)

    return { nodes, links }

  }

  color = (category) => {
    return scale(category);
  }



  render(){
    return(
        <svg viewBox={`${-height/2}, ${-width/2}, ${height}, ${width}`}>
          <g stroke="#222299" strokeOpacity="0.9" strokeWidth="1">
            {this.state.links.map(d => (
              <line x1={d.source.x} y1={d.source.y} x2={d.target.x} y2={d.target.y}/>
            ))}
          </g>
          <g fill="#fff" stroke="#000" strokeWidth="0.5">
            {this.state.nodes.map(d => (
              <g transform={`translate(${d.x}, ${d.y})`}>
                <NodeLabel dx="2" dy="1.2em">{d.title}</NodeLabel>
                <circle r="5.5" cx="0" cy="0" title={d.title} fill={this.color(d.food_choice)}/>
              </g>
            ))}
          </g>
        </svg>
    )
  }

}

export default Graph;
