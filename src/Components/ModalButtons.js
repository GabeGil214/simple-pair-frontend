import React , { Fragment, useState } from 'react'
import AddItem from './AddItem'
import AddLink from './AddLink'
import { Link } from 'react-router-dom'
import { Box, Button, Layer } from 'grommet'
import { Plus, Link as LinkIcon } from 'styled-icons/fa-solid'

function ModalButtons(){
  const [showItemModal, setItemModal] = useState(false);
  const [showLinkModal, setLinkModal] = useState(false);


  return (
    <Box className="modal-button-container">
      <div className="content-button">
          <Button id="create-button" onClick={() => setItemModal(true)} type="button" className="btn btn-dark modal-buttons">
            <Plus />
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
          </Button>
      </div>

      <div className="content-button">
          <Button id="link-button" onClick={() => setLinkModal(true)} type="button" className="btn btn-dark modal-buttons">
            <LinkIcon />
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
          </Button>
      </div>
    </Box>
  )
}

export default ModalButtons
