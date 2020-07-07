/*const express = require('express');
const router = express.Router();

router.get('/contact', (req, res)=>{
    res.render("contact/index");
})

module.exports = router;
*/

module.exports = (app)=>{
    app.get('/contact',(req, res) =>{
        res.render("contact/index");
    })

};