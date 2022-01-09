import React, { useEffect, useState } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import * as actionTypes from '../../store/action/actionTypes';

import { List,Divider,Toolbar} from '@mui/material';

import {_id} from '../utils/util'
import DetelsItem from './DetelsItem';

const BoxLeft = () => {
    const [folder,setFoldet]=useState([])
    const state = useSelector(state => state)

    const dispatch = useDispatch()
    const {openBoxLeft,Uid,folders} = state

   
const openModale = (id,act) =>{
  dispatch({
    type : act ? actionTypes.OPEN_CHOOS_MODAL : actionTypes.OPEN_FILE_MODALE ,
    Uid : id
  })
}



const functionArrrr = (folder) => {
  const arr = []
  const functionRender = (folderXX) => {
    if(folderXX.child?.length && (folderXX.show || folderXX.fileName)){
      folderXX.child.forEach((child)=>{
        arr.push({...child, parentFolderName: false});
        functionRender(child)
      })
    }
  }

  functionRender(folder)

  return arr
}

const folderDetails = (item)=>{  
  const newItems = functionArrrr(item)

  return newItems.map((item)=>{
    return <DetelsItem folder={item} openModale={openModale} key={_id()} />
  })

}
    

   useEffect(()=>{
     const arr = folders.find(i=>Uid.includes(i.Uid)) 
     setFoldet(arr || [])
   },[folders,Uid])

    return (
        <div>
          {
          openBoxLeft && folder.length !== 0 && Uid &&
          <DetelsItem folder={folder} openModale={openModale} key={_id()}/>                
          }
          <Toolbar />
          <Divider />   
          { 
          openBoxLeft && folders && Uid &&  
          <List>
            {folders &&  folderDetails(folder)}
          </List>
          }
        </div>
    );
};

export default BoxLeft;