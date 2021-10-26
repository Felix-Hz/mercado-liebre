// Instancio Express, router y path
const express = require('express');
const router = express.Router();
const path = require('path');

const mainController = { // Los métodos  se encargaran de cada req en particular

    index: (req, res) => {
        let fileToSend = path.join(__dirname, '../views/users/home');
        res.render(fileToSend); // uso render por EJS
    },

    login: (req, res) => {
        let fileToSend = path.join(__dirname, '../views/users/login');
        res.render(fileToSend); 
    },

    register: (req, res) => {
        let fileToSend = path.join(__dirname, '../views/users/register');
        res.render(fileToSend);
    }
};

module.exports = mainController;