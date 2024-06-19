import { ObjectId } from "mongodb"
import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {

    obtenerProductos = async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')
        //throw new Error('Error en Model MongoDB!')
        const productos = await CnxMongoDB.db.collection('productos').find({}).toArray()
        return productos
    }
    
    obtenerProducto = async id => {
        if(!CnxMongoDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')
        //const producto = await CnxMongoDB.db.collection('productos').findOne({_id: new ObjectId(id)})
        const producto = await CnxMongoDB.db.collection('productos').findOne({_id: ObjectId.createFromHexString(id)})
        return producto
    }

    guardarProducto = async producto => {
        if(!CnxMongoDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')

        await CnxMongoDB.db.collection('productos').insertOne(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        if(!CnxMongoDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')

        await CnxMongoDB.db.collection('productos').updateOne(
            {_id: ObjectId.createFromHexString(id)}, 
            { $set: producto }
        )
        const productoActualizado = await this.obtenerProducto(id)
        return productoActualizado
    }

    borrarProducto = async id => {
        if(!CnxMongoDB.connectionOK) throw new Error('[ERROR] DAO sin conexión a MongoDB')

        const productoBorrado = await this.obtenerProducto(id)
        await CnxMongoDB.db.collection('productos').deleteOne({_id: ObjectId.createFromHexString(id)})
        return productoBorrado
    }
}

export default ModelMongoDB