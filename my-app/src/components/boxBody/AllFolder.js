import React from 'react';

import folder from '../../images/folder.png';

import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../../store/action/actionTypes';



function AllFolder() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

  

    const openDetailsFolder = (id) =>{
       dispatch({
           type:actionTypes.SHOW_DATELS_FOLDER,
           _id:id,
       })
    }
    return (
        <div  className='gridBox'>         
           {state.folders && state.folders.length !== 0 && state.folders.map(i=>(
              <div key={i.Uid} className='grid-item' onClick={()=>openDetailsFolder(i.Uid)}>
                    <img src = {folder} alt='folder' className='folderImg'/>
                    <div>{i.folderName}</div>
                </div>
           
           )) } 
           
             
        </div>
    );
}

export default AllFolder;