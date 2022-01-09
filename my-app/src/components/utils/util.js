export const _id = () =>{
  return Math.random()*1000 + Math.random()*10 + 'abc'
}

export const isValidate=(folderName,findFolderName)=>{
    let isValid = false
    let textError = ''
    if (folderName === ''){
       isValid = true
       textError += 'folder name is required'
    }
if(!!findFolderName.find(i=>i.folderName === folderName)){
    isValid = true
    textError = 'this name has already been used'
}
return {isValid,textError}
}



const addFile = (Uid,folderChild,file) =>{  
  let k =folderChild.map(i=>{
    if(i.Uid ===Uid){
   i.child.unshift(file)
  }else if(i.child){
    addFile(Uid,i.child,file)
  }
   return i
})
  return k


}


export const add =(state, file,folderId)=>{
  let detels = state
  return detels.map(i=>{
    if (folderId === i.Uid){
       i.child.unshift(file)
    }else if(i.child.length > 0){
      addFile(folderId,i.child,file)
    }
      return i
    })
}



export const deleteFileOrFolder =(state,id)=>{

 return state.map((i,z) => {
    if(i.Uid === id){
      return state.splice(z,1)
    }
    if(i.child.length > 0){ 
      deleteFileOrFolder(i.child,id)
    }
    
      return i
    

})

}

const showFolder = (state,id)=>{
 return state.map(i=>{
    if(i.Uid === id){
      return i.show = !i.show
    } else if (i.child && i.child.length > 0 ){
       showFolder(i.child,id)
    } 
     return i 
 })
}

export const showDetails = (state,id)=>{

return state.map(i=>{
    if(i.Uid === id){
      return {...i, show : !i.show}
    } else if (i.child && i.child.length > 0 ){
       showFolder(i.child,id)
    } 
    return i 
})

}

