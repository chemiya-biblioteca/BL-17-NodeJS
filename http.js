const http=require("http")
const server=http.createServer((request,response)=>{
    console.log(request.url)
    if(request.url==="/"){
        response.write("welcome to the server")
        return response.end()
    }
    if(request.url==="/about"){
        response.write("estas en about")
       return response.end();
    }
    response.write(`
    <h1>not found</h1>
    <p>esta pagina no se encuentra</p>
    <a href="/">volver a la pagina principal</a>
    `)
    response.end()
})

server.listen(3000)
console.log("servidor escuchando puerto 3000")
//ir a localhost:3000
//ir a localhost:3000/about