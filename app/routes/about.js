/*const express = require('express');
const router = express.Router();

router.get('/about', (req, res)=>{
    res.render("about/index");
})


module.exports = router;*/


module.exports = (app)=>{
    app.get('/about',(req, res) =>{
        res.render("about/index");
    })

};