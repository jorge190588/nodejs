var ModuloNuevo = function(){
	var _private = {}, _public = {}; 
	_private.formulario=null;
	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.asignarFormulario();
		_private.agregarEventoAbotonGuardar();
	}

	_private.asignarFormulario=function(){
		var elementos = $("form");
		if (elementos.length==0){
			console.log("formulario de nuevo no encontrado");
		}else{
			_private.formulario=elementos[0];
		}
	}

	_private.agregarEventoAbotonGuardar=function(){
		$("#guardar")[0].addEventListener('click', function(event) { 
			_private.validarFormulario();			
		});
	}

	_private.validarFormulario=function(){
		var esFormularioValido=_private.formulario.checkValidity();
		console.log("formularios es valido ",esFormularioValido);
		var elementos = $("form > div > input");
		var esElementoValido=false;
		for(var index=0;index< elementos.length;index++){
			esElementoValido=elementos[index].checkValidity();
			if (!esElementoValido)
				console.log("el contenido del elemento ",elementos[index].id," no es valido");
		}
	}

	return _public.__construct.apply(this, arguments);
}

var nuevo = new ModuloNuevo();
document.addEventListener('DOMContentLoaded',nuevo.iniciar() , false);