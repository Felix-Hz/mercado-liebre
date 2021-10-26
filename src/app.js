// Requiring express and path, instantiating express
const express = require('express');
const app = express();
const path = require('path');

// Static files can be found in public 
app.use(express.static(path.resolve(__dirname, "../public")));

// Running the server
app.listen(process.env.PORT || 3030, () =>
    console.log('Servidor corriendo en: http://localhost:3030')
);

// EJS as template engine
app.set('view engine', 'ejs');         

// Routes module imports
const mainRouter = require('./routes/mainRoutes');

// Routes implementation
app.use('/', mainRouter);
app.use('/login', mainRouter);
app.use('/register', mainRouter);