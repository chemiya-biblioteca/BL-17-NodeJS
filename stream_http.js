const http=require("http")
const {createReadStream}=require("fs")

const server=http.createServer((req,res)=>{
    const fileStream=createReadStream("./data/bigFile.txt",{
        encoding:"utf-8"
    })

    fileStream.on("data",(chunck)=>{
        fileStream.pipe(res)
    })

    fileStream.on("error",(error)=>{
        console.log(error)
    })
})

server.listen(3000)
console.log("servidor en el 3000")

//ir a pestaña red en chrome