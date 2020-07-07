/*const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render("home/index");
})

module.exports = router;*/

module.exports = (app)=>{
    app.get('/',(req, res) =>{
        res.render("home/index");
    })

};