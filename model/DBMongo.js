//https://www.npmjs.com/package/mongoose
//https://mongoosejs.com/

import mongoose from 'mongoose'
import config from '../config.js'

class CnxMongoDB {
    static connectionOK = false

    static conectar = async _ => {
        try {
            console.log('-> Conectando a la base de datos (mongoose)...')
            await mongoose.connect(config.STRCNX + config.BASE)
            console.log('[OK] base de datos conectada!')

            CnxMongoDB.connectionOK = true
        }
        catch(error) {
            console.log(`[ERROR] Error en conexión de base de datos: ${error.message}`)
        }
    }
}

export default CnxMongoDB

/* import { MongoClient } from "mongodb"
import config from '../config.js'

class CnxMongoDB {
    static connectionOK = false
    static db = null

    static conectar = async _ => {
        try {
            console.log('-> Conectando a la base de datos...')
            const client = new MongoClient(config.STRCNX)
            await client.connect()
            console.log('[OK] base de datos conectada!')

            CnxMongoDB.db = client.db(config.BASE)

            CnxMongoDB.connectionOK = true
        }
        catch(error) {
            console.log(`[ERROR] Error en conexión de base de datos: ${error.message}`)
        }
    }
}

export default CnxMongoDB */