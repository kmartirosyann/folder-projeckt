import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import {ListItemText ,ListItem} from '@mui/material';

import folderImg from '../../images/folder.png';
import documents from '../../images/documents.png';


import {useDispatch} from 'react-redux';
import * as actionTypes from '../../store/action/actionTypes';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';






const DetelsItem = ({folder,openModale}) => {

    const dispatch = useDispatch()
    
    const hendlFileOrFolderDelete=(id)=>{
        dispatch({
            type:actionTypes.DELETE_FILE_OR_FOLDER,
            id
        })
    }


    const openFolderChildren =(id)=>{

        dispatch({
            type:actionTypes.SHOW_DETAILS_FOLDER,
             showId:id
        })

    }

    const editFileOrFolder =(id)=>{
    return
    }
    return ( 
    <div> 
      {
        (folder.folderName || folder.fileName )
        ?
        <ListItem button >
         {folder.folderName
           &&
           <ExpandLessIcon
             className= {folder.show ? 'transformIcon':''}
             onClick={()=> openFolderChildren(folder.Uid)}
           />
           }
            <img
              src = { folder.icon === 'documents' ? documents : folderImg }
              alt = { folder.icon === 'documents' ? documents : folderImg }
              className = 'folderImg'
            />
            <ListItemText
              primary = { folder.fileName || folder.folderName || folder.folders.folderName }
            />
            <AddIcon
              onClick = {() => openModale(folder._id || folder.folders._id, !folder.fileName ) }
            />
            <ModeEditIcon
              onClick={()=>editFileOrFolder(folder.Uid)}
            />
            <DeleteIcon
              onClick={()=>hendlFileOrFolderDelete(folder.Uid)}
            />
        </ListItem>
        :
        null
      }
       
    </div>
    );
};

export default DetelsItem;