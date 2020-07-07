var app = require('./config/server');
const express = require('express');
app.use(express.static(__dirname+'/res'));

const port = 3000;
app.listen(port, ()=>{
    console.log('Servidor rodando na porta '+port);
})