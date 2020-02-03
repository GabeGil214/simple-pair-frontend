import React from 'react'
import { Box, Button } from 'grommet'

function AddItem(){

  return(
    <Box className="modal-box">
      <h1>Add New Food Item</h1>
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
      <Button type="submit" name="Submit" label="Submit" />
    </Box>
  )
}

export default AddItem;
