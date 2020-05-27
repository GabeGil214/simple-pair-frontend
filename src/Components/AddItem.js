import React, { useState, useContext } from 'react';
import { Box, Button, Heading } from 'grommet';
import { AuthContext } from '../reducers/authReducer';
import { FoodContext } from '../reducers/foodReducer';
import axios from 'axios';
import PRODUCTION_URL from '../assets/config';

function AddItem(){
  const [title, setTitle] = useState('');
  const [commentText, setCommentText] = useState('');
  const [foodChoice, setFoodChoice] = useState("BK");
  const [foodState, foodDispatch] = useContext(FoodContext);
  const [authState, authDispatch] = useContext(AuthContext);

  async function createFoodItem(){

    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Token ${authState.key}`
      }
    }

    axios.post(PRODUCTION_URL + '/api/food/',
    {
        "title": title,
        "comment_text": commentText,
        "date_added": new Date(),
        "allow_comments": false,
        "food_choice": foodChoice,
        "owner": 1
    }
    , options).then(response => {
      foodDispatch({
        type: 'ADD_FOOD_ITEM',
        payload: response.data
      })
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })

  }

  return(
    <Box className="modal-box">
      <Heading level="3" alignSelf="center">Add New Food Item</Heading>
      <div className="form-group">
        <p className="input-label">Food Item</p>
        <input className="form-control" type="text" name="title" onChange={event => setTitle(event.target.value)}/>
      </div>
      <div className="form-group">
        <p className="input-label">Description</p>
        <input className="form-control" type="textarea" name="comment_text" onChange={event => setCommentText(event.target.value)} />
      </div>
      <div className="form-group">
        <select name="food_choice" onChange={event => setFoodChoice(event.target.value)}>
          <option value="BK">Breakfast</option>
          <option value="LN">Lunch</option>
          <option value="DN">Dinner</option>
          <option value="SNK">Snack</option>
          <option value="DES">Dessert</option>
        </select>
      </div>
      <Button type="submit" label="Submit" onClick={createFoodItem} style={{borderRadius: '30px'}} />
    </Box>
  )
}

export default AddItem;
