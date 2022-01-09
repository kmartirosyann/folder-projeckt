import React from 'react';
import {Box,Modal,Typography,Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector ,useDispatch} from 'react-redux';
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

export default function RemoveOrCancelModal() {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

const handelFileOrFolderDelete=()=>{
    dispatch({
        type:actionTypes.REMOVE_FILE_OR_FOLDER,
        
    })
}

const cancelRemove=()=>{
    dispatch({
        type:actionTypes.CANCEL_REMOVE,   
    })
}

    return (
        <div>
            
            <Modal
              open={state.remove}  
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure you want to delete this folder?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handelFileOrFolderDelete}> Delete </Button>
                <Button onClick={cancelRemove}>cancel</Button>
                </Typography>
              </Box>
            </Modal>
        </div>
    )
}
