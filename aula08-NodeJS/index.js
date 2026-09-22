const http = require("http")

const server = http.createServer( (req, res) => { //req = requisição - res = resposta
    res.statusCode = 200 // esperando uma resposta do status, se 200 funciona.
    res.setHeader( 'content-type', 'text/plain' )
    res.end('Olá mundo!')
} )

server.listen(3000 , '127.0.0.1', () => {
    console.log("servidor rodando em http://127.0.0.1:3000") //ip padrão "127.0.0.1"
})

http//127.0.0.1:3000