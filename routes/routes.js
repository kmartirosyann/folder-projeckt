const {Router} = require('express')
const FolderSchema = require('../models/FolderSchema')
const router = Router()



// /api
router.post('/addFolder',async(req,res)=>{
    try{
        const { folderName,show,child,Uid } = req.body
        const findFolder = await FolderSchema.find({folderName})

        if(findFolder.length > 0){
            return res.status(400).json({message:"This name was chosen."})
        }
        const folder = new FolderSchema({ folderName,Uid,show,child } )
        await folder.save(folder)
        res.status(201).json({message:"Created new folder",folder})
    }catch(e){
        res.status(500).json({message:"Something went wrong try again."})
    }
})

router.get('/addFolder',async (req,res)=>{
    try{
        const findFolder = await FolderSchema.find()
            res.json(findFolder)
    }catch (e) {
        res.status(500).json({message:"Something went wrong try again."})
    }
})

router.put('/addFolder/:id',async (req,res)=>{
    try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({message:"This name was chosen."})
        }
        const findFolder = await FolderSchema.findById(id)
            findFolder.child.push(req.body)
         await findFolder.save(findFolder)
        const data = await FolderSchema.find()
         res.json(data)

    }catch (e) {
        res.status(500).json({message:"Something went wrong try again."})
    }
})

module.exports = router;