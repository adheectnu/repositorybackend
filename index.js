require('dotenv').config()
const http = require('http')

// Definimos el puerto primero
const PORT = process.env.PORT || 10000 

function requestController(req, res) {
    console.log('Bienvenidos al curso')
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    
    // USAMOS EL PUERTO AQUÍ
    res.end(`<h1>Bienvenidos al curso</h1><p>Aplicación corriendo exitosamente en el puerto: ${PORT}</p>`)
}

const server = http.createServer(requestController)

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})