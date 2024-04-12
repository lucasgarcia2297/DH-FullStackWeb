const express = require('express');
const path = require('path');
const multer = require('multer');

const userController = require('../controllers/userController');

const guesMiddleware = require('../middlewares/guestMiddleware');
const {createUserValidation} = require('../middlewares/userValidations');

//configurar multer: (debería hacerse en otro archivo)
const storage = multer.diskStorage({
    destinatation: function(req,file,cb){
        cb(null, path.join(__dirname,'../public/img/users'))
    },
    filename: function(req,file,cb){
        const ext = path.extname(file.originalname);
        // const filename = path.basename(file.originalname,ext);
        // cb(null, `${filename}-${Date.now()}${ext}`);
        //Otra forma (mejor)
        cb(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
});

const upload = multer({storage});
//------------------


const router = express.Router();

//router.use(guesMiddleware); //si quisiera que fuese global
router.get('/',guesMiddleware,userController.index);
router.post('/create',upload.single('img'),createUserValidation ,userController.store);
router.get('/create',userController.create);
module.exports = router;