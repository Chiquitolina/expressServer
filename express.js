//IMPORTA LA LIBRERÍA
const express = require('express')

//IMPORTA EL MÓDULO DE RUTAS
const routes = require('./routes/routes.js')

//CREA UNA INSTANCIA
const app = express()

//PUERTO
const port = 3000;

//CONFIGURA LA DECODIFICACION DE DATOS EN FORMATO JSON
//Y URL EN LAS SOLICITUDES ENTRANTES
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//CONFIGURACION DEL ROUTER
app.use('/', routes)

//LE DAMOS MECHA AL SERVER
app.listen(port, () => {
    console.log("Conectado correctamente al puerto 3000.")
})