//npm init -y
//npm i express
//const express=require("express")
//añado type module en el json
import express from "express"
const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>bienvenido</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>about</h1>")
})



app.listen(3000)

//npm install nodemon -d
//modificio json pongo en script dev
//npm run dev

console.log("servdor en el 3000")

