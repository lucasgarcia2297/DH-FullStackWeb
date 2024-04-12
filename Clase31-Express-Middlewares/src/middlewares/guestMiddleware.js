function guesMiddleware(req,res,next) {
    const { user } = req.query;
    if(!user){
        return res.send('El usuario debe estar logueado');
    }
    req.user = user;
    next();
}

module.exports = guesMiddleware;