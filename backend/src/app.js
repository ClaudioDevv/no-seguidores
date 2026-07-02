import express from 'express'
import helmet from 'helmet'
import multer from 'multer'
import { corsMiddleware } from './middlewares/cors.js'
import * as procesarController from './controllers/procesar.controller.js'

const app = express()
const PORT = process.env.PORT ?? 3000

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 20 * 1024 * 1024  // Max 20MB por archivo
  }
})

app.use(helmet())
app.use(corsMiddleware())

app.get('/', (req, res) => {
  res.send('API funcionando correctamente')
})

app.post(
  '/procesar',
  upload.fields([
    { name: "seguidos", maxCount: 1 },
    { name: "seguidores", maxCount: 1 }
  ]),
  procesarController.procesar
)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`)
})
