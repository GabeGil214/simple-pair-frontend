import React, { Component, Fragment, useEffect, useState } from 'react';
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
  constructor(){
    super()
    this.state = {
      foodModal: false,
      currentItem: {}
    }
  }


  static getDerivedStateFromProps(nextProps, prevState){
    //Converts Nodes and Links arrays to d3 objects
    if(!nextProps.nodes) return null;
    let { nodes, links } = nextProps;
    console.log(nodes)
    console.log(links)
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


    return { nodes, links }

  }

  color = (category) => {
    return scale(category);
  }

  showFoodModal(foodItem){
    this.setState({
      foodModal: true,
      currentItem: foodItem,
    })
  }



  render(){
    return(
      <Fragment>
        <svg viewBox={`${-height/2}, ${-width/2}, ${height}, ${width}`}>
          <g stroke="#222299" strokeOpacity="0.9" strokeWidth="1">
            {this.state.links.map(d => (
              <line x1={d.source.x} y1={d.source.y} x2={d.target.x} y2={d.target.y}/>
            ))}
          </g>
          <g fill="#fff" stroke="#000" strokeWidth="0.5">
            {this.state.nodes.map(d=> (
              <g transform={`translate(${d.x}, ${d.y})`}>
                <NodeLabel dx="2" dy="1.2em">{d.title}</NodeLabel>
                <circle r="5.5" cx="0" cy="0" title={d.title} fill={this.color(d.food_choice)} onClick={() => this.showFoodModal(d)} />
              </g>
            ))}
          </g>
        </svg>
        {this.state.foodModal && (
          <Layer
            onEsc={() => this.setState({
              foodModal: false
            })}
            onClickOutside={() => this.setState({
              foodModal: false
            })}
            >
            <div className="modal-container">
              <FoodDetails
                food={this.state.currentItem} />
            </div>
          </Layer>
        )}
      </Fragment>
    )
  }

}

export default Graph;
