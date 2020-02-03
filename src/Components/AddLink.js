import React from 'react'
import { Box, Button } from 'grommet'

function AddLink(){

  return(
    <Box className="modal-box">
      <h1>Add New Connection</h1>
      <div className="form-group"><p className="input-label">First Item</p><input className="form-control" type="First Item" name="Item 1" /></div>
      <div className="form-group"><p className="input-label">Second Item</p><input className="form-control" type="Second Item" name="Item 2" /></div>
      <Button type="submit" value="Save" label="Save" />
    </Box>
  )
}

export default AddLink;
