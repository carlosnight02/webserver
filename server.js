const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));
 
/*app.get('/', (req, res)=> {
  let salida = {
      nombre: 'fernando',
      edad: 32,
      url: req.url
  };
  res.send(salida);
})*/
const port= 3000; 
app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})