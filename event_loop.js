const http=require("http")
const server=http.createServer((request,response)=>{
    
    if(request.url==="/"){
        response.write("welcome to the server")
        return response.end()
    }

    if(request.url==="/about"){
        for(let i=0;i<25000;i++){
            console.log(Math.random()*i)
        }
        return response.end("estas en about")
    }

    response.end("no encontrada")
})

server.listen(3000)
console.log("servidor en 3000")