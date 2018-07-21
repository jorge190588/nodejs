var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var datos= [];

// asignar el pre procesador de vistas
app.engine('pug', require('pug').__express);
// view engine setup
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'pug');
app.locals.pretty = true;
app.use(express.static(
		path.join(__dirname, 'public')) //directorio donde estan los js y css
);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/alumno', function (req, res) {
  res.render('alumno/index',
  	{ 	title: 'Participantes',
    datos
  	});
});
//mostramos el formulario cuando lo soliciten
app.get('/nuevo', function(req, res){
  res.render('alumno/formularioNuevo',
  {
    title: 'Registro Nuevo'
  });
});

//bodyParser: false para que solo lea texto
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/registrar', function(req, res){
  datos.push({nombre: req.body.nombre, carnet:req.body.carnet, ciclo:req.body.ciclo, facultad:req.body.facultad, evento:req.body.evento , categoria:req.body.categoria}); 
  res.render('alumno/index',
  { title: 'Participantes',
    datos 
  });
});

app.get('/modificar', function(req, res){

 
});

app.listen(9000, function () {
  console.log('localhost:9000');
});
