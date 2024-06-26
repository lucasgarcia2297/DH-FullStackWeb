//Librerias de terceros y nativas
const express = require('express');
const path = require('path');

//Modulos propios
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');

const logMiddleware = require('./middlewares/logMiddleware');

//Configuración
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Implementacion de middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logMiddleware);

//Implementación de las rutas
app.use('/', mainRoutes);
app.use('/user', userRoutes);

//Ejecución(?)
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`);
});