import Modale from './components/modale/Modale';
import Header from './components/header/Header';
import AllFolder from './components/boxBody/AllFolder';
import BoxLeft from './components/boxLeft/BoxLeft';
import ChoosModale from './components/modale/ChoosModale';
import ModalFile from './components/modale/ModalFile';
import RemoveOrCancelModal from './components/modale/RemoveOrCancelModal';

import './App.css';
import { Grid } from '@mui/material';

import {  useHttp } from './hooks/http.hook';
import { useEffect } from 'react';

import * as actionTypes    from './store/action/actionTypes';
import { useDispatch } from 'react-redux';


function App() {
  const {request}= useHttp()
  const dispatch = useDispatch()

  useEffect( ()=>{
    (async()=>{
      try{
        const data = await request('http://localhost:5000/api/addFolder','GET')
        dispatch({
          type: actionTypes.GET_ALL_FOLDERS,
          payload: data
        })
        console.log(data)
      }catch (e){
        console.log(e)
      }
    })()

  },[dispatch,request])

  return (
    <div className="App">
      <Modale/>
      <ChoosModale/>
      <ModalFile/>
      <RemoveOrCancelModal/>
      <Header/>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <BoxLeft/>
        </Grid>
        <Grid item xs={10}>
          <AllFolder/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
