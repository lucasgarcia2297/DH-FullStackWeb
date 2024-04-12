const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const userDataFilePath = path.join(__dirname,'../data/users.js');
function getUsers() {
    return JSON.parse(fs.readFileSync(userDataFilePath, 'utf-8')); 
}

const controller = {
    index(req, res){
        if(req.session.user){
            return res.redirect('/profile');
        }
        console.log(req.cookies.username);
        return res.render('index');
    },
    login(req, res){
        const users = getUsers();
        const user = users.find((element)=>elemento.email === req.body.email);
        const errors = {
            unauthorized: {
                msg: 'Usuario y/o contraseña incorrecto'
            }
        }
        if(!user){
            return res.render('index', {errors});
        }
        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.render('index', {errors})
        }
        //Creo una variable de sesión
        req.session.user = {   
            timestamp: Date.now(),
            id: user.id,
            name: user.name,
            email: user.email
        };
        //Para crear una cookie
        res.cookie('username',req.body.name/*, si le quiero dar una fecha de expiración: {maxAge : 60000}*/);
        
        return res.redirect('/profile');
    },
    profile(req, res){
        // const user = req.session.user;
        const {user} = req.session;
        return res.render('profile',{user});
    },
    //Para Cerrar sesión
    logout(req, res){
        req.session.user = undefined; //ésta es una de las formas de cerrar sesión
        //Otra forma de eliminar la sesión
        // delete req.session.user;
        res.clearCookie('username');
        return res.redirect('/');    
    },
    register(req, res){
        return res.render('register');    
    },
    registerProcess(req, res){
        const users = getUsers();
        const user = {
            id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password,10)
        };
        users.push(user);
        fs.writeFileSync(userDataFilePath, JSON.stringify(users,null,4));
        return res.redirect('/');    
    }
};

module.exports = controller;