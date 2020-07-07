
var User  = require('../models/User');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');



module.exports = (app)=>{

    var erro = false;
    var erro_msg = "asdasdas";


    app.get('/login',(req, res) =>{
        console.log(erro);
        console.log(erro_msg);
        res.render("login/index",{erro: erro, erro_msg: erro_msg});
    });

    app.post('/login/create',async(req, res) => {
        var data = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password, salt);
        User.create({name: data.email, email: data.email, password: hash}).then(resp => {
            console.log(resp);
            res.redirect("/");
        }).catch(err => {
            console.log(err);
        });
    });

    app.post('/login/auth',async(req, res)=>{
        var data = req.body;
        User.findAll().then(resp =>{
            var aux = resp;
            var has_user = false;
    
            aux.map((user)=>{
                if(data.email = user.dataValues.email && 
                    bcrypt.compareSync(data.password, user.dataValues.password))
                    has_user = true;
                
            });
            
            if(has_user){
                res.redirect("/");
            }else{
                erro = true;
                erro_msg = "email ou senha incorretos!";
                res.redirect('/login');
            }
        })
    });



};
