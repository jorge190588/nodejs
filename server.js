var express = require('express');
var app = express();
var path = require('path');
// asignar el pre procesador de vistas
app.engine('pug', require('pug').__express)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = true;
app.use(express.static(
		path.join(__dirname, 'public'))
);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/alumno', function (req, res) {
  res.render('alumno/index', 
  	{ 	title: 'Pagina web', 
  		message: 'Curso de preprivado',
  		description:'fundamentos basicos de programacion',
  		listado :[{alumno:"Jorge", edad: 30},{alumno:"Jose",edad: 20}]
  	}
  	);
});

app.listen(9000, function () {
  console.log('localhost:9000');
});