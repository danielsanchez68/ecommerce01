import express from 'express'

import Controlador from '../controlador/pedidos.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    config() {
        this.router.get('/', this.controlador.obtenerPedidos )
        this.router.post('/', this.controlador.guardarPedido )
        this.router.post('/mp/create_preference', this.controlador.createPreference )

        return this.router
    }
}

export default Router
