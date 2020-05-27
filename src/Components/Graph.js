import React, { Component, Fragment } from 'react';
import FoodDetails from './FoodDetails';
import { Layer } from 'grommet';
import * as d3 from 'd3';
import styled from 'styled-components'


const height = 200;
const width = 200;

const scale = d3.scaleOrdinal(d3.schemeCategory10);

const NodeLabel = styled.text`
      font-size: 8px;
      z-index: 99;
    `;

class Graph extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodModal: false,
      currentItem: {}
    }
  }


  static getDerivedStateFromProps(nextProps, prevState){
    //Converts Nodes and Links arrays to d3 objects
    if(!nextProps.nodes) return null;
    let { nodes, links } = nextProps;
    nodes = nodes.map(d => Object.create(d))
    links = links.map(d => Object.create(d))

    let simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    simulation
      .nodes(nodes);

    simulation.force("link")
      .links(links);

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
          <g stroke="#333" strokeOpacity="0.9" strokeWidth="1">
            {this.state.links.map(d => (
              <line key={d.id} x1={d.source.x} y1={d.source.y} x2={d.target.x} y2={d.target.y}/>
            ))}
          </g>
          <g fill="#fff" stroke="#000" strokeWidth="0.5">
            {this.state.nodes.map(d=> (
              <g key={d.id} transform={`translate(${d.x}, ${d.y})`}>
                <NodeLabel dx="2" dy="1.4em">{d.title}</NodeLabel>
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
