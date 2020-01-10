const express = require('express');
const app = express();

const hbs = require('hbs');

app.use(express.static(__dirname+'/public'));

//Express HBS engine
hbs.registerPartials(__dirname+ '/views/parciales');
app.set('view engine', 'hbs');
 
app.get('/', (req, res)=> {
  
  res.render('home', {
    nombre: 'Carlos',
    anio: new Date().getFullYear()  
  });
});

app.get('/about', (req, res) => {

  res.render('about', {
    anio: new Date().getFullYear()
   });

});



const port= 3000; 
app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})