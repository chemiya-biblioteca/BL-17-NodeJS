const path=require("path")
const filepath=(path.join("/public","dist","/styles"))
console.log(path.basename(filepath))
console.log(path.dirname(filepath))