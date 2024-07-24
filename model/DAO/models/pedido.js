import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
    usuario: Object,
    compra: Object,
    pedido: Array
}, { versionKey: false })

export const PedidoModel = mongoose.model('pedidos', pedidoSchema)