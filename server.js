//IMPORTS
const express = require('express') //importa la lib express
const cors = require('cors') //importa la lib cors
const routes = require('./routes/routes.js') //importa el módulo de rutas creado en ../routes/routes.js

//CONSTS
const app = express() //crea la instancia de xpress
const port = 3000; //puerto

//MIDDLEWARES
app.use(cors()) //config del cors
app.use(express.json()) //config para la decodificiación de jsons en solicitudes entrantes
app.use(express.urlencoded({ extended: false})) //config para la decod de datos codificados en urls

//ROUTES
app.use('/', routes) //configuracion del enrutador

//LE DAMOS MECHA AL SERVER
//ponemos a la instacia d express a escuchar el puerto 3000
app.listen(port, () => {
    console.log("Conectado correctamente al puerto 3000.")
})