const eventEmitter=require("events")
const { EventEmitter } = require("stream")

const customEmitter=new EventEmitter()

customEmitter.on("response",(data,segundo)=>{
    console.log("recibido:")
    console.log(data)
    console.log(segundo)
})

customEmitter.emit("response","hello","otro")