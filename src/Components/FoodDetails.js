import React, { useState } from 'react'
import { Box } from 'grommet'
import { BottomBar, FoodModal, ModalTab } from './styled'

function FoodDetails(props){
  const { food } = props;
  const {showComments, setShowComments } = useState(false)
  //Request user info and comments list
  // useEffect() => {
  //
  // }

  return(
    <FoodModal className="modal-box">
      <h1>{food.title}</h1>
      <div><p>{food.comment_text}</p></div>
      <BottomBar
        direction="row"
        pad="none"
        justify="around" >
        <ModalTab
          align="center"
          border="right"
          >
          <p>Comments</p>
        </ModalTab>
        <ModalTab
          align="center">
          <p>Linked Foods</p>
        </ModalTab>
      </BottomBar>
    </FoodModal>
  )
}

export default FoodDetails
