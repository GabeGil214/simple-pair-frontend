import React from 'react'
import { Box, Button, Heading } from 'grommet'

function AddLink(){

  return(
    <Box className="modal-box">
      <Heading level="3" alignSelf="center">Add New Connection</Heading>
      <div className="form-group"><p className="input-label">First Item</p><input className="form-control" type="First Item" name="Item 1" /></div>
      <div className="form-group"><p className="input-label">Second Item</p><input className="form-control" type="Second Item" name="Item 2" /></div>
      <Button type="submit" label="Save" style={{borderRadius: '30px'}}/>
    </Box>
  )
}

export default AddLink;
