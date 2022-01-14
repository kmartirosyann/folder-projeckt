const {Schema,model,Types} = require('mongoose')

const schema = new Schema({
     folderName: { type: String },
     Uid:{type:String},
      show:{type:Boolean},
     child:{type:Array},
})

const FolderSchema = model("FolderSchema",schema)

const file = new FolderSchema

file.child = [{
  filename:{type:String},
  Uid:{type:String},
  _id: new Types.ObjectId,
  icon:{type:String},
  child:{type:Array},
}]

module.exports = FolderSchema