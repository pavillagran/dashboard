import http from 'http'
import fs from 'fs'
const {createReadStream} = fs
const {createServer} = http
import { criptoS } from './obtenerDatos.js';   // importa variables dentro de las llaves ya con datos


// configuramos con una variable de entorno el puerto
const {PORT = 3000} = process.env

// creamos con el content type del archivo que vamos a servir
const HTML_CONTENT_TYPE = 'text/html'
const CSS_CONTENT_TYPE = 'text/css'
const JS_CONTENT_TYPE = 'text/javascript'

// creamos un requestListener para pasarle a nuestro servidor
const requestListener = (req, res) => {
  // escribimos en la respuesta el status code de 200 y el content type que necesitamos
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
  // leemos el fichero index.html y su contenido lo redirigimos a la respuesta
  createReadStream('index.html').pipe(res)
}

// creamos un servidor con el requestListener
const server = createServer(requestListener)

// hacemos que el servidor escuche el puerto configurado
server.listen(PORT)


console.log(criptoS)


