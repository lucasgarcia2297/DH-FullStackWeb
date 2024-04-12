function guestMiddleware(req, res,next){
    if(req.session.usuarioLogueado == undefined){
        next();
    }else{
        res.send('Esta página es solo para invitados');
    }
}

modulo.exports = guestMiddleware;