import React  from 'react';

import folder from '../../images/folder.png';
import documents from '../../images/documents.png';

import { useDispatch} from 'react-redux';
import * as actonTaypes from '../../store/action/actionTypes';

const Header = () => {
    const dispatch = useDispatch()
  
   const addFolder = ()=>{
     dispatch({type:actonTaypes.OPEN_START_MODAL})
   }
    return (
        <div className='header'>
            <ul className='menu'>
                <li onClick={addFolder}>
                    <img
                      src = {folder}
                      alt='folder'
                      className='folderImg'
                    />
                </li>
                <li>
                    <img
                      src = {documents}
                      alt='documents'
                      className='folderImg'
                    />
                </li>
            </ul>
        </div>
    );
};

export default Header;