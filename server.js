import express from 'express'
import config from './config.js'

import RouterProductos from './router/productos.js'
import RouterPedidos from './router/pedidos.js'

import CnxMongoDB from './model/DBMongo.js'


const app = express()
app.use(express.static('public'))

app.use(express.json())

// -------------- Rutas / endpoints API RESTFUL ------------------
app.use('/api/productos', new RouterProductos().config())
app.use('/api/pedidos', new RouterPedidos().config())


// --------------- Listen del Servidor ------------------
if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful ECommerce escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))


