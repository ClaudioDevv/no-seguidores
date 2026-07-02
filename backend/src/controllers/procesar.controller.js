import fs from 'node:fs'
import { procesarArchivos } from '../services/procesar.service.js'

export const procesar = async (req, res) => {
  const seguidos = req.files.seguidos?.[0]
  const seguidores = req.files.seguidores?.[0]

  if (!seguidos || !seguidores) {
    return res.status(400).json({ 
      error: "Faltan archivos"
    })
  }

  if(seguidos.originalname != 'following.json' || seguidores.originalname != 'followers_1.json'){
    fs.unlink(seguidos.path, () => {})
    fs.unlink(seguidores.path, () => {})
    return res.status(400).json({ error: "Archivos incorrectos" })
  }

  try {
    const resultado = await procesarArchivos(seguidos.path, seguidores.path)
    res.json({ resultado })
  } catch(error) {
    console.error(error)
    res.status(error.status ?? 500).json({ error: error.message})
  }
}