//IMPORTS
const express = require('express') //importa la lib express
const cors = require('cors') //importa la lib cors
const routes = require('./routes/routes.js') //importa el módulo de rutas creado en ../routes/routes.js

//CONSTS
const app = express() //crea la instancia de xpress
const port = 3000; //puerto

//CONFIGS
app.use(cors()) //config del cors
app.use(express.json()) //config para la decodificiación de jsons en solicitudes entrantes
app.use(express.urlencoded({ extended: false})) //config para la decod de datos codificados en urls
app.use('/', routes) //configuracion del router

//LE DAMOS MECHA AL SERVER
app.listen(port, () => {
    console.log("Conectado correctamente al puerto 3000.")
})