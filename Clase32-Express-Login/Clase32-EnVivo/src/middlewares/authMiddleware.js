function authMiddleware(req, res,next){
    if(req.session.usuarioLogueado != undefined){
        next();
    }else{
        res.send('Esta página es solo para usuarios');
    }
}

modulo.exports = authMiddleware;