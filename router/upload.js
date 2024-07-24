import express from 'express'

import Controlador from '../controlador/upload.js'

//https://www.npmjs.com/package/multer
import multer from 'multer'

const storage = multer.diskStorage({
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    },
    destination: function(req, file, cb) {
        cb(null, './uploads')
    }
})

const upload = multer({ storage: storage })

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    config() {
        this.router.post('/', upload.single('archivo'), this.controlador.recibirArchivo )

        return this.router
    }
}

export default Router
