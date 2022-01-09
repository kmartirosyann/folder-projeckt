import * as actionTypes from '../action/actionTypes';
import {add, _id,deleteFileOrFolder,showDetails} from '../../components/utils/util'


const initialState = {
    folders:[],
    Uid:[],
    openChoosModale:false,
    openBoxLeft:false,
    isOpenModale:false,
    isOpenFileModale:false,
    folderId:'',
    remove:false,
    Id:'',
    showId:''
}

 const addFolder =(arr,folderId,folderName)=>{
    return arr.map(i=>{
      if(i.Uid === folderId){
        i.child.push({folderName,Uid:_id(),show:false,child:[]})
      }else if(i.child){
       return addFolder(i.child,folderId,folderName)
      }
      return i
    })
    }
    
     const findFolder = ( folderName,state,folderId)=>{
      if(folderId=== ''){
        return {folderName,Uid:_id(),show:false,child:[]}
      }

    return state.map(i=>{
      
        if(folderId===i.Uid){
         i.child.push({folderName,Uid:_id(),show:false,child:[]})
        }else if(i.child.length > 0){
        addFolder(i.child,folderId,folderName)
        }
        return i
      })
    
     
       }
     


const reducer = (state = initialState, action) => {
    const actionReducer = {
        [actionTypes.OPEN_CHOOS_MODAL]:()=>({
         ...state,
         Uid:[...new Set(state.Uid.concat(action.Uid)) ],
         folderId:state.folderId = action.Uid,
         openChoosModale:true
        }),
        [actionTypes.CLOSE_CHOOS_MODALE]:()=>({
            ...state,
            openChoosModale:false
           }),
           [actionTypes.OPEN_FILE_MODALE]:()=>({
            ...state,  
            isOpenFileModale:true
           }),
           [actionTypes.CLOSE_FILE_MODALE]:()=>({
            ...state,
            isOpenFileModale:false
           }),
        [actionTypes.ADD_FILL]:()=>({
            ...state,  
           folders:add(state.folders,action.peyload,state.folderId ),
           isOpenFileModale:false   
        }),
        [actionTypes.START_PROJECT]: () => ({
            ...state,
            isOpenModale:false
        }),
        [actionTypes.OPEN_MODAL]: () => ({
            ...state,
            isOpenModale:true
        }),
        [actionTypes.OPEN_START_MODAL]: () => ({
            ...state,
            Uid:[],
            isOpenModale:true
        }),
        [actionTypes.CLOSE_MODALE]: () => ({
            ...state,
            isOpenModale:false
        }),
        [actionTypes.ADD_FOLDER]: () => ({
            ...state,      
            folders: [ ...state.folders,action.payload] ,
            isOpenModale:false
        }),
        [actionTypes.ADD_FOLDER_CHILD]: () => ({
            ...state,           
            folders:findFolder(action.payload,state.folders,state.folderId) ,
            isOpenModale:false
        }),
        [actionTypes.DELETE_FILE_OR_FOLDER]:()=>({
            ...state,
            remove:true,
            Id:action.id
        }),
        [actionTypes.REMOVE_FILE_OR_FOLDER]:()=>({
            ...state,
            folders:deleteFileOrFolder(state.folders,state.Id),
            remove:false,
        }),
        [actionTypes.CANCEL_REMOVE]:()=>({
            ...state,
            remove:false,
        }),
        [actionTypes.SHOW_DETAILS_FOLDER]:()=>({
            ...state,
            showId:action.showId,
            folders: showDetails(state.folders,action.showId)
        }),
        [actionTypes.SHOW_DATELS_FOLDER]: () => ({
            ...state,
            Uid:[action._id],
            openBoxLeft:true
        }),


    }
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    } else {
        return state
    }

}

export default reducer