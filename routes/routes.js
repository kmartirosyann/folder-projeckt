const {Router} = require('express')
const Folder = require('../models/models')
const router = Router()



// /api
router.post('/add',async(req,res)=>{
    try{
        const {folderName,fileName} = req.body
        const findFolder = await Folder.findOne({folderName})

        if(findFolder){
            return res.status(400).json({message:"This name was chosen."})
        }

        const folder = new Folder({folderName})

        await folder.save()
        
        res.status(201).json({message:"Created new folder"})

    }catch(e){
        res.status(500).json({message:"Something went wrong try again."})
    }
})

module.exports = router;