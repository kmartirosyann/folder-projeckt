const {Schema,model,Types} = require('mongoose')

const schema = new Schema({
folders:[{
    folderName:String,
    type:Types.ObjectId,
    date: Date.now
}]
})

module.exports = model("folder",schema)