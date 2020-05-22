const httpServer = require('http')

const host = '127.0.0.1';
const port = 8080;
const server = httpServer.createServer((req, res)=>{
    res.end('Hey You ');
});

server.listen(port,host,()=>{
    console.log(`Server Started at https://${host}:${port}`);
})