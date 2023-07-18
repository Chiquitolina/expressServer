//IMPORTS
const express = require('express') //import express
const enviarMensaje  = require('../utils/twilio.js') //import funcion enviarMensaje del módulo ../utils/twilio.js

//CONSTS
const router = express.Router() //crea instancia del router de express

//ROUTES

//ruta principal
router.get('/', (req, res) => {
    res.send('Hola')
})

//ruta para enviar mensaje
router.post('/send', (req, res) => {
    const {tonumber, message} = req.body //desmembramos el cuerpo de la solicitud

    //llamamos la funcion importada para enviar el mensaje
    enviarMensaje(tonumber, message)
    
})

module.exports = router;

