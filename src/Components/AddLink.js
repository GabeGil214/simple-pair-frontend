import React, {useState} from 'react'
import { Box, Button, Heading } from 'grommet'
import axios from 'axios'

function AddLink(){

  const [linkOne, setLinkOne] = useState(null);
  const [linkTwo, setLinkTwo] = useState(null);

  async function createLink(){
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }

    axios.post('http://127.0.0.1:8000/api/links/',{
        "value": 0,
        "owner": 1,
        "link_one": linkOne,
        "link_two": linkTwo
    }, options).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
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
