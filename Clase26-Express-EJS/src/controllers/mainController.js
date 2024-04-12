const controller = {
    index(req, res) {
        res.render('index');
    },
    getMenuDetail(req,res){
        res.render('detalleMenu');
    }
};

module.exports = controller;