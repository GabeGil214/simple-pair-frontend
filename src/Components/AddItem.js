import React, {useState} from 'react'
import { Box, Button, Heading } from 'grommet'
import axios from 'axios'

function AddItem(){

  const [title, setTitle] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(false);
  const [foodChoice, setFoodChoice] = useState('');

  async function createFoodItem(){

    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    axios.post('http://127.0.0.1:8000/api/food/',{
        "title": title,
        "comment_text": commentText,
        "date_added": new Date(),
        "allow_comments": comments,
        "food_choice": foodChoice,
        "owner": 1
    }, options).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })

    // console.log(response);
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
