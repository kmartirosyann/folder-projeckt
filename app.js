const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const request = require('./routes/routes')
const cors=require("cors")

const app = express()

const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))
 app.use(bodyParser.json())

 app.use(express.json())

 app.use(express.urlencoded({ extended: true }));

 app.use('/api',request)

const PORT = config.get('port') || 5000

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'),{
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        app.listen(PORT,()=>console.log(`App has been started on port: ${PORT}`))
    }catch(e){
        console.log("Error", e.message)
        process.exit(1)
    }

}

start()

