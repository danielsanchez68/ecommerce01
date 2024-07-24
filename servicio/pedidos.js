import ModelFactory from '../model/DAO/pedidos/pedidosFactory.js'
import config from '../config.js'

import { preference } from './pago.js'

class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerPedidos = async _ => {
        return await this.model.obtenerPedidos()
    }

    guardarPedido = async pedido => {
        const pedidoGuardado = await this.model.guardarPedido(pedido)
        return pedidoGuardado
    }

    createPreference = async prefItems => {
        //console.log(prefItems)
        try {
            const preferences = await preference.create(prefItems)

            return preferences.id
        }
        catch(error) {
            console.log(`Error al crear preferences: ${error.message}`)
            return null
        }
    }
}

export default Servicio