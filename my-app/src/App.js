import Modale from './components/modale/Modale';
import './App.css';
import {Grid} from '@mui/material';
import Header from './components/header/Header';
import AllFolder from './components/boxBody/AllFolder';
import BoxLeft from './components/boxLeft/BoxLeft';
import ChoosModale from './components/modale/ChoosModale';
import ModalFile from './components/modale/ModalFile';
import RemoveOrCancelModal from './components/modale/RemoveOrCancelModal';


function App() {


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
