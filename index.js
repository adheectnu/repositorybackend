require('dotenv').config()
const http = require('http')

// Agregamos los parámetros req y res
function requestController(req, res) {
    console.log('Bienvenidos al curso')
    
    // 1. Decimos que todo está OK (status 200) y que enviaremos HTML
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    
    // 2. Enviamos el mensaje que verá el usuario en la web
    res.end('<h1>Bienvenidos al curso</h1><p>Aplicación corriendo exitosamente en el puerto: ' + PORT + '</p>')
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 10000 // Agregamos un fallback por si acaso

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})