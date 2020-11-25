const express = require('express')
const app = express()



app.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/carrito', function(req, res){
    res.sendFile(__dirname + '/views/carrito.html')
})

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/views/registro.html')
})


app.listen(3030, () => console.log("Servidor corriendo en el puerto 3030"))