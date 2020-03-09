import React, { useEffect, useState } from 'react'
import Graph from './Graph'
import { nodesList, edgeList } from '../graphData'
import axios from 'axios'

function GraphContainer(){
  const [foodData, setFoodData] = useState([]);
  const [linkData, setLinkData] = useState([]);


  useEffect(() => {
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    const fetchData = async () => {
      axios.get('http://127.0.0.1:8000/api/food/', options).then(response => {
        setFoodData(response.data.results);
      }).catch(error => {
        console.log(error)
      });

      axios.get('http://127.0.0.1:8000/api/links/', options).then(response => {
        console.log(response.data.results)
        const links = [
          {
            id: 1,
            owner: 1,
            source: 1,
            target: 2,
          },
          {
            id: 2,
            owner: 1,
            source: 3,
            target: 4,
          }
        ]
        setLinkData(links);
      }).catch(error => {
        console.log(error)
      });
    };

    fetchData();
  }, []);

  return (
    <div className="graph-container">
      <Graph
        nodes={foodData}
        links={linkData}
         />
    </div>
  )
}

export default GraphContainer;
