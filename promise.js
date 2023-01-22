const { readFile}=require("fs")
//const { readFile}=require("fs/promise") utilizar donde readFilePromise pongo readFile
const {promisify}=require("util")

const readFilePromise=promisify(readFile)


const getText=(pathfile)=>{
    return new Promise(function(resolve,reject){
        readFile(pathfile,"utf-8",(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

getText("./data/file1.txt")
.then((result)=>console.log(result))
.then(()=>(getText("./data/file3.txt")))
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

async function read(){
    try{
        const result=await getText("./data/file1.txt")
        const result3=await getText("./data/file3.txt")
        console.log(result)
        console.log(result3)
        //throw new Error("no se esperaba")
    }catch(error){
        console.log(error)
    }
    
}

read()


async function read1(){
    try{
        const result=await readFilePromise("./data/file1.txt","utf-8")
        const result3=await readFilePromise("./data/file3.txt","utf-8")
        console.log(result)
        console.log(result3)
        //throw new Error("no se esperaba")
    }catch(error){
        console.log(error)
    }
    
}
read1()


/*async function read1(){
    try{
        const result=await readFile("./data/file1.txt","utf-8")
        const result3=await readFile("./data/file3.txt","utf-8")
        console.log(result)
        console.log(result3)
       
    }catch(error){
        console.log(error)
    }
    
}*/


