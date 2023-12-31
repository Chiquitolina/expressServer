//IMPORTS
require ('dotenv').config() //import lib dotenv para proteger las variables de entorno

//CONSTS
const accountSid = process.env.accountSid; //id de twilio sacado del env
const authToken = process.env.authToken; //id de authToken sacado del env
const client = require('twilio')(accountSid, authToken); //import e iniciación de twilio

function enviarMensaje(numberto, message) {

client.messages
    .create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:' + numberto
    })
    .then(message => console.log( message.sid )) //se ejecuta si la promesa se resuelve correctamente
    .catch(error => {console.log( error )}) //manejo de errores en caso de que no
}

module.exports = enviarMensaje
