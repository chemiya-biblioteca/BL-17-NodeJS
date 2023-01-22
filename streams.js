const {writeFile}=require("fs/promises")

const createBigFile=async()=>{await writeFile("./data/bigFile.txt","hello world".repeat(100000))}

createBigFile()
