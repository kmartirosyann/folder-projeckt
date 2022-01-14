import React, { useState } from 'react';
import {Box,Modal,Typography, TextField,Button} from '@mui/material';
import { useHttp } from '../../hooks/http.hook'
import folder from '../../images/folder.png';


import * as actionTypes from '../../store/action/actionTypes';
import {useSelector , useDispatch} from 'react-redux';

import {_id,isValidate} from '../utils/util'

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

function Modale() {
   const {request}= useHttp()

   const state = useSelector(state =>state)
   const dispatch = useDispatch()

   const [folderName,setFolderName] = useState('')
   const [valid,setValid] = useState({})

    const handleClose =()=>{
        dispatch( {type: actionTypes.CLOSE_MODALE})
    }
    const handleChange =(event)=>{
         setFolderName( event.target.value)
    }

    const handleBlur =()=>{
        setValid(isValidate(folderName,state.folders))
    }
const url = 'http://localhost:5000'
  const addFolderHandler = async ()=>{
    try{
     await request(`${url}/api/addFolder`,'POST',{folderName,Uid:_id(),show:false, child:[]})
    }catch (e){
      console.log(e)
    }

  }
  const addFolderChold = async ()=>{
    try{
    const data = await request(`${url}/api/addFolder/${state.folderId}`,'PUT',{folderName,_id:_id(),show:false, child:[]})
      dispatch({
        type: actionTypes.GET_ALL_FOLDERS,
        payload: data
      })
    }catch (e){
      console.log(e)
    }

  }

    const heandlSubmit =()=>{
        setValid(isValidate(folderName,state.folders))
        if(!valid.isValid){
          if(state.folderId === ''){
            addFolderHandler()
            dispatch({
              type: actionTypes.ADD_FOLDER,
              payload:{folderName,Uid:_id(),show:false, child:[]}
          })

          } else{
            addFolderChold()
            dispatch({
                    type: actionTypes.ADD_FOLDER_CHILD,
                    payload: folderName
                })
            }
        }

        setFolderName('')
    }

    
    return (
        <Modal
        open={state.isOpenModale}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img
          src = {folder} alt='folder'
          className='folderImg'
        />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
          <TextField
          error = {valid.isValid}
          onBlur={handleBlur}
          onChange={handleChange}
          name='folderName'
          size="small"
          sx={{ mt: 2 }}
          required
          id="outlined-required"
          label="Name folder"
          helperText={valid.textError}
          value= {folderName}
        />
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={heandlSubmit}
        >
          Submit
        </Button>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
          </Typography>
        </Box>
      </Modal>
    );
}

export default Modale;