import React, { useState } from 'react';
import { Box,Modal,Typography, TextField,Button,TextareaAutosize } from '@mui/material';
import documents from '../../images/documents.png';

import * as actionTypes from '../../store/action/actionTypes';
import {useHttp}        from '../../hooks/http.hook';
import {useSelector , useDispatch } from 'react-redux';

import { _id,isValidate } from '../utils/util';


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

const ModalFile = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const { request } = useHttp()

    const [fileName,setFileName] =useState('')
    const [text,setText] =useState('')

    const [valid,setValid] = useState({})

    const handleClose =()=>{
        dispatch( {type: actionTypes.CLOSE_FILE_MODALE})
    }
    const heandlChange =(event)=>{   
        setFileName( event.target.value)
    }

    const hendlTextChange = (event)=>{
        setText(event.target.value)
    }

    const hendlBlur =()=>{
        setValid(isValidate(fileName,state.folders))
    }


  const url = 'http://localhost:5000'

    const handleSubmit =()=>{
        setValid(isValidate(fileName,state.folders))
        if(!valid.isValid){
          request(`${url}/api/addFolder/${state.folderId}`,'PUT',{fileName,text,_id:_id(),'icon':'documents'})
            .then(res=> dispatch({
              type: actionTypes.ADD_FILL,
              payload: res
            }))

                setFileName('')
        }      
        
    }

    return (
        <div>
                <Modal
        open={state.isOpenFileModale}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img src = { documents} alt='folder' className='folderImg'/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <TextField
            error = {valid.isValid}
            onBlur={hendlBlur}
            onChange={heandlChange}
            name='fileName'
            size="small"
            sx={{ mt: 2 }}
            required
            id="outlined-required"
            label="Name folder"
            helperText={valid.textError}
            value= {fileName}
        />
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: 200 }}
            onChange={hendlTextChange}
            value={text}
        />
        <Button sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>Submit</Button>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          </Typography>
        </Box>
      </Modal> 
        </div>
    );
};

export default ModalFile;