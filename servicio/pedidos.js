import ModelFactory from '../model/DAO/pedidos/pedidosFactory.js'
import config from '../config.js'


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
}

export default Servicio