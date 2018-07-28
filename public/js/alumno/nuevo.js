var ModuloNuevo = function(){
	var _private = {}, _public = {}; 

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.agregarEventoAbotonGuardar();
	}

	_private.agregarEventoAbotonGuardar=function(){
		$("#guardar")[0].addEventListener('click', function(event) { 
			console.log("guardar")
		});
	}

	return _public.__construct.apply(this, arguments);
}

var nuevo = new ModuloNuevo();
document.addEventListener('DOMContentLoaded',nuevo.iniciar() , false);