import React , { useState } from 'react'
import AddItem from './AddItem'
import AddLink from './AddLink'
import { Link } from 'react-router-dom'
import { Box, Button, Layer } from 'grommet'
import styled from 'styled-components'
import { Plus, Link as LinkIcon } from 'styled-icons/fa-solid'

function ModalButtonContainer(props){
  const [showItemModal, setItemModal] = useState(false);
  const [showLinkModal, setLinkModal] = useState(false);

  const ModalButtons = (props) => (
    <Box
      style={{
        position: 'fixed',
        right: '25px',
        bottom: '25px',
        width: '75px'
      }}
      {...props}
      />
  )

  const ContentDiv = styled.div`
        margin: 10px;
      `;

  return (
    <ModalButtons>
      <ContentDiv>
          <Button
            onClick={() => setItemModal(true)}
            primary={true}
            fill={true}
            icon={<Plus />}
            />
            {showItemModal && (
              <Layer
                onEsc={() => setItemModal(false)}
                onClickOutside={() => setItemModal(false)}
                >
                <div className="modal-container">
                  <AddItem />
                </div>
              </Layer>
            )}
      </ContentDiv>

      <ContentDiv>
          <Button
            primary={true}
            fill={true}
            onClick={() => setLinkModal(true)}
            icon={<LinkIcon />}
            />
            {showLinkModal && (
                <Layer
                  onEsc={() => setLinkModal(false)}
                  onClickOutside={() => setLinkModal(false)}
                  >
                  <div className="modal-container">
                    <AddLink />
                  </div>
                </Layer>
              )}
      </ContentDiv>
    </ModalButtons>
  )
}

export default ModalButtonContainer
