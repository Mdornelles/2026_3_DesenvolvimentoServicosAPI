const mysql = require('mysql')
const http = require('http')
const { stringify } = require('querystring')

const hostname = "127.0.0.1" //ip padrao da maquina
const port = "3000" //porta

const conn = mysql.createConnection( { //conexão com o banco
    host : hostname ,
    user : "root", 
    password : "",
    database : "loja_26_1"
} )

function consultar( res ){
    const sql = "SELECT * FROM produto ORDER BY nome" //fazendo uma requisição no banco para conseguir puxar todos os produtos

    conn.query(sql , (err , result , fields) => {
        if ( err ){
            res.end( JSON.stringify(    {
                                        resposta : "Erro na consulta",
                                        erro : err
                                        } //vai me mostrar a resposta de erro (resposta : ) e vai me passar qual foi o erro (erro : )
                                    ) 
                    )//JSON.stringify pega um objeto js e transforma num JSON
        }else{
            res.end( JSON.stringify(result))
        }
    })// quando consultar o sql ela pula para a função. se der um erro, resultado ou campos, vai fazer
}

const server = http.createServer( (req, res) => { //req = requisição - res = resposta
    res.statusCode = 200 // esperando uma resposta do status, se 200 funciona.
    res.setHeader( 'content-type', 'application/json' )
    try{
        if(conn.state != 'authenticated')/*isso quer dizer que não conectou com o banco*/{
            conn.connect(function(err){
                if(err){
                    res.end(JSON.stringify({resposta: "Erro em conectar com o banco!", erro: err})
                            )
                }else{
                    consultar(res)
                }

            })
        }else{
            consultar(res)
        }
    }catch (error){
        res.statusCode = 500
        res.end(JSON.stringify({resposta : "Erro no servidor"}))
    }
} )

server.listen(port, hostname, () => {
    console.log(`Servidor bombou em: http://$(host):$(port) `)
})