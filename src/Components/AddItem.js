import React from 'react'
import { Box, Button, Heading } from 'grommet'

function AddItem(){

  return(
    <Box className="modal-box">
      <Heading level="3" alignSelf="center">Add New Food Item</Heading>
      <div className="form-group">
        <p className="input-label">Food Item</p>
        <input className="form-control" type="text" name="food-item" />
      </div>
      <div className="form-group">
        <p className="input-label">Description</p>
        <input className="form-control" type="textarea" name="description" />
      </div>
      <div className="form-group">
        <select name="category">
          <option value="BK">Breakfast</option>
          <option value="LN">Lunch</option>
          <option value="DN">Dinner</option>
          <option value="SNK">Snack</option>
          <option value="DES">Dessert</option>
        </select>
      </div>
      <Button type="submit" label="Submit" style={{borderRadius: '30px'}} />
    </Box>
  )
}

export default AddItem;
