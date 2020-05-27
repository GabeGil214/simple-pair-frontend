import React, { useState, useEffect, useRef, Fragment } from 'react';
import ReactDOM from 'react-dom';
import FoodDetails from './FoodDetails';
import { Layer } from 'grommet';
import * as d3 from 'd3';
import styled from 'styled-components'

const height = 900;
const width = 600;

const scale = d3.scaleOrdinal(d3.schemeCategory10);

const lineColor = '#333';

const strokeWidth = 2;

const NodeLabel = styled.text`
      font-size: 8px;
      z-index: 99;
    `;

function NewGraph(props) {
  let { nodes, links } = props;
  const [foodModal, showFoodModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  let svgRef = useRef(null);

  useEffect(() => drawGraph(), [nodes, links]);

  const drawGraph = () => {

    nodes = nodes.map(d => Object.create(d))
    links = links.map(d => Object.create(d))

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(75).strength(1))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    const svg = d3.select(svgRef.current);

    d3.selectAll("g").remove();

    const link = svg.append("g")
     .attr("stroke", lineColor)
     .attr("stroke-opacity", 0.9)
   .selectAll("line")
   .data(links)
   .join("line")
     .attr("stroke-width", strokeWidth);

     const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", strokeWidth)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("r", 12)
      .attr("fill", d => color(d.food_choice))
      .on('click', d => viewFoodItem(d))

      node.append('text')
        .attr('dx', 2)
        .attr('dy', '1.4em')
        .text(d => d.title);

      node.append("title")
        .text(d => d.title);

      simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
      });

  }

  const color = (category) => {
    return scale(category);
  }

  const viewFoodItem = (foodItem) => {
    showFoodModal(true);
    setCurrentItem(foodItem);
  }

    return (
      <Fragment>
        <svg
          width={width}
          height={height}
          ref={svgRef}
          />
        {foodModal && (
          <Layer
            onEsc={() => showFoodModal(false)}
            onClickOutside={() => showFoodModal(false)}
            >
            <div className="modal-container">
              <FoodDetails
                food={currentItem} />
            </div>
          </Layer>
        )}
      </Fragment>
    )
}

export default NewGraph;
