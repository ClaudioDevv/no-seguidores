import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const execFileAsync = promisify(execFile)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CPP_EXECUTABLE = path.resolve(__dirname, "../../cplusplus/noseguidores")

export const procesarArchivos = async (seguidosPath, seguidoresPath) => {
  try {
    const { stdout } = await execFileAsync(CPP_EXECUTABLE, [seguidosPath, seguidoresPath])
    return stdout.trim().split('\n').filter(Boolean)
  } catch(error){
    if (error.code === 3) {
      const err = new Error('Fallo al cargar los archivos')
      err.status = 400
      throw err
    }
    console.error('Error al ejecutar el binario noseguidores:', error)
    const err = new Error('Error inesperado en el servidor')
    err.status = 500
    throw err
  } finally {
    await Promise.allSettled([
      fs.unlink(seguidosPath),
      fs.unlink(seguidoresPath)
    ])
  }
}