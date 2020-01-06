const http = require('http');

http.createServer((req, res)=>{
    
    /*res.write('Hola mundo');
    res.end();*/

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Carlos',
        edad: 35,
        url:req.url
    } 

    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log(`escuchando el puerto 8080`);