const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');



const mainRouter = require('./routers/main')

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({ secret : "Lo que nosotros queramos"})); //Este string se va codificar y decodificar automaticamente con express-session

app.use('/',mainRouter);

const port = 3000;
app.listen(port, ()=>{
    console.log(`Servidor funcionando en http://localhost:${port}`);
});