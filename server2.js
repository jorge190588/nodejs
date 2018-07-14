var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// asignar el pre procesador de vistas
app.engine('pug', require('pug').__express)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = true;
app.use(express.static(
		path.join(__dirname, 'public'))
);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/formulario', function (req, res) {
  res.render('index', 
  	{ 	title: 'Pagina web', 
  		message: 'Curso de preprivado',
  		description:'fundamentos basicos de programacion'
  	}
  	);
});


app.post('/guardar', function(req, res) {
    var nombre = req.body.nombre;
    var carne = req.body.carne;
    var edad = req.body.edad;
    if (edad > 18){
      res.send('persona mayor de edad');
    }else{
      res.send('persona menor de edad');
    }
});

app.listen(8081, function () {
  console.log('localhost:8081');
});

