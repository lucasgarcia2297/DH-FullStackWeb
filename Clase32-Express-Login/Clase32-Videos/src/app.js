const express = require('express');
const session = require('express-session');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const logMiddleware = require('./middlewares/logMiddleware');

const app = express();

app.use(logMiddleware);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(session({secret: 'Secreto!'}));


app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);

const port = 3000;
app.listen(port, () => {
   console.log(`Servidor funcionando en http://localhost:${port}`);
});