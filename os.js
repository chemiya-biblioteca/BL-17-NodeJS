const os=require("os")
console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())



console.table({
    os:os.platform(),
    version:os.release(),
    
})