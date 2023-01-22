const {createReadStream}=require("fs")
const stream =createReadStream("./data/bigFile.txt","utf-8")

stream.on("data",(chunck)=>{
    console.log(chunck)
})

stream.on("end",()=>{
    console.log("ya termino")
})

stream.on("error",(error)=>{
    console.log(error)
})