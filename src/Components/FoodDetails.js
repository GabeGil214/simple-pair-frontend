import React from 'react'
import { Box } from 'grommet'
import { BottomBar, FoodModal, ModalTab } from './styled'

function FoodDetails(props){
  const { food } = props;
  // const { activeTab, setActiveTab } = useState('comments');
  // const { commentsList, setCommentsList } = useState([]);
  // //Request user info and comments list
  // // useEffect() => {
  // //  axios.get('http://127.0.0.1:8000/comments/api/Food-food/${food.title}')
  //       // .then(response => {
  //     //     setCommentsList(response.data);
  //     // })
  // // }

  return(
    <FoodModal
      pad="none"
      width="medium"
      round="small"
      gap="medium"
      className="modal-box">
      <Box
        pad="medium">
        <h1>{food.title}</h1>
        <div><p>{food.comment_text}</p></div>
      </Box>
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
