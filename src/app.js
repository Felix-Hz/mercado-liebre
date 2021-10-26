const express = require('express');
const app = express();
const path = require('path');

// npm run start - corre el servidor

app.get('/home', (req, res) => {
    res.send('Si... ¡está corriendo!');
});

app.listen(process.env.PORT || 3030, () =>
    console.log('Servidor corriendo... Entrar acá: http://localhost:3030')
);

// path.resolve(X,Y) para que ante cualquier cambio se mantenga --constante
app.use(express.static(path.resolve(__dirname, "./public")));

app.get('/', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/home.html');
    res.sendFile(fileToSend);
});

app.get('/register', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/register.html');
    res.sendFile(fileToSend);
});

app.get('/login', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/login.html');
    res.sendFile(fileToSend);
});

