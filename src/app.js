const express = require('express');
const app = express();
const path = require('path');

// Lo estático se sacara por defecto de public 
app.use(express.static(path.resolve(__dirname, "./public")));

app.get('/home', (req, res) => {
    res.send('Si... ¡está corriendo!');
});

app.listen(process.env.PORT || 3030, () =>
    console.log('Servidor corriendo en: http://localhost:3030')
);

// Define que el motor que utilizamos es EJS 
app.set('view engine', 'ejs');         

// Importo los modulos de las rutas al entry point 
const mainRouter = require('./routes/main');

app.use('/', mainRouter);
app.use('/login', mainRouter);
app.use('/register', mainRouter);