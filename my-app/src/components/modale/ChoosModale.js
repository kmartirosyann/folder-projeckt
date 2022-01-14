import React from 'react';

import { Box,Modal,Typography } from '@mui/material';

import folder from '../../images/folder.png';
import documents from '../../images/documents.png';

import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/action/actionTypes';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ChoosModale = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const { openChoosModale } = state

    const handleClose = () =>{
        dispatch({
            type:actionTypes.CLOSE_CHOOS_MODALE
        })
    }

    const openFolderModal =()=>{
        dispatch({
            type:actionTypes.OPEN_MODAL
        })
        dispatch({
            type:actionTypes.CLOSE_CHOOS_MODALE
        })
    }
    
    const openFileModal =()=>{
        dispatch({
            type:actionTypes.OPEN_FILE_MODALE
        })
        dispatch({
            type:actionTypes.CLOSE_CHOOS_MODALE
        })
    }
    return (
     <div>
        <Modal
          open={openChoosModale}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
                <img
                  src = {folder} alt='folder'
                  className='folderImg'
                  onClick={openFolderModal}
                />
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
                 <img
                   src = {documents}
                   alt='documents'
                   className='folderImg'
                   onClick={openFileModal}
                 />
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
};

export default ChoosModale;