var app = require('./config/server');
const express = require('express');
app.use(express.static(__dirname+'/res'));


app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
    console.log(process.cwd());
})