import React, { useState, useContext } from 'react';
import { Box, Button, Heading } from 'grommet';
import { AuthContext } from '../reducers/authReducer';
import { FoodContext } from '../reducers/foodReducer';
import axios from 'axios';
import PRODUCTION_URL from '../assets/config';

function AddLink(){
  const [authState, authDispatch] = useContext(AuthContext);
  const [linkOne, setLinkOne] = useState(null);
  const [linkTwo, setLinkTwo] = useState(null);
  const [links, linkDispatch] = useContext(FoodContext);

  async function createLink(){
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Token ${authState.key}`
      }
    }

    axios.post(PRODUCTION_URL + '/api/links/',{
        "value": 3,
        "owner": 1,
        "num_vote_up": 0,
        "num_vote_down": 0,
        "vote_score": 0,
        "source": linkOne,
        "target": linkTwo
    }, options).then(response => {
      linkDispatch({
        type: 'ADD_LINK',
        payload: response.data
      })
    }).catch(error => {
      console.log(error.response)
    })

  }

  return(
    <Box className="modal-box">
      <Heading level="3" alignSelf="center">Add New Connection</Heading>
      <div className="form-group"><p className="input-label">First Item</p><input onChange={event => setLinkOne(event.target.value)} className="form-control" type="First Item" name="link_one" /></div>
      <div className="form-group"><p className="input-label">Second Item</p><input onChange={event => setLinkTwo(event.target.value)} className="form-control" type="Second Item" name="link_two" /></div>
      <Button type="submit" label="Save" onClick={createLink} style={{borderRadius: '30px'}}/>
    </Box>
  )
}

export default AddLink;
