const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.get('/',(req,res)=>{
    res.send('hola mundo soy xioxhy')
})


app.listen(port,()=>{
    console.log('Servidor escuchando en http://localhost:'+port)
})
