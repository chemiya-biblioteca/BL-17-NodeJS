const fs=require("fs")
const archivo=fs.readFileSync("./data/file.txt","utf-8")
const archivo1=fs.readFileSync("./data/file1.txt")
console.log(archivo)
console.log(archivo1.toString())



fs.writeFileSync("./data/file3.txt","tercer archivo")

const title="hola otro desde js"
fs.writeFileSync("./data/file3.txt",title,{
    flag:"a"
})

fs.readFile("./data/file1.txt",function(error,data){
    if(error){
        console.log(error)
    }
    console.log(data.toString())

    fs.readFile("./data/file.txt",function(error,data){
        if(error){
            console.log(error)
        }
        console.log(data.toString())

        fs.writeFile("./data/file5.txt","archivo nuevo",(err,data)=>{
            console.log(err)
        })
    })
})