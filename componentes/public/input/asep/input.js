'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputAsep = function () {
	function InputAsep(clase) {
		_classCallCheck(this, InputAsep);

		$('.' + clase).on("click", this.prueba);
		$('.' + clase).on("click", this.validadName);
		$('.' + clase).on("click", this.validadApellido);
		$('.' + clase).on("click", this.validadEmail);
		$('.' + clase).on("click", this.validaContrasena);
		$('.' + clase).on("click", this.validaDNI);
		$('.' + clase).on("click", this.validaTelefono);
	}

	/*	prueba(){
 		var nombre = $('#claseApellido').val();
 		if(!isNaN(nombre)){
 			if(nombre.length<1){
 				$("#mensaje").fadeIn("slow");
             	return false;
 			}else{
             	$("#mensajeA").fadeIn("slow");
             	return false;
 			}
         }
 	}*/

	_createClass(InputAsep, [{
		key: 'validadName',
		value: function validadName() {
			var name = $('#claseNombre').val();
			if (!isNaN(name)) {
				if (name.length < 1) {
					$("#mensajeNombreImagen").fadeIn("slow");
					return false;
				} else {
					$("#mensajeNombreImagen").fadeOut("slow");
					$("#mensajeNombreL").fadeIn("slow");
					return false;
				}
			} else {
				$("#mensajeNombreImagen").fadeOut("slow");
				$("#mensajeNombreL").fadeOut("slow");
				if (name.length > 101) {
					$("#mensajeNombreM").fadeIn("slow");
					return false;
				}
			}
		}
	}, {
		key: 'validadApellido',
		value: function validadApellido() {
			var name = $('#claseApellido').val();
			if (!isNaN(name)) {
				if (name.length < 1) {
					$("#mensajeApellidoImagen").fadeIn("slow");
					return false;
				} else {
					$("#mensajeApellidoImagen").fadeOut("slow");
					$("#mensajeApellidoL").fadeIn("slow");
					return false;
				}
			} else {
				$("#mensajeApellidoImagen").fadeOut("slow");
				$("#mensajeApellidoL").fadeOut("slow");
				if (name.length > 101) {
					$("#mensajeApellidoM").fadeIn("slow");
					return false;
				}
			}
		}
	}, {
		key: 'validadEmail',
		value: function validadEmail() {
			var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
			var email = $('#claseEmail').val();
			if (email.length < 1) {
				$("#mensajeEmail").fadeOut("slow");
				$("#mensajeEmailImagen").fadeIn("slow");
				return false;
			} else {
				if (!expresion.test(email)) {
					$("#mensajeEmailImagen").fadeOut("slow");
					$("#mensajeEmail").fadeIn("slow");
					return false;
				} else {
					$("#mensajeEmail").fadeOut("slow");
					$("#mensajeEmailImagen").fadeOut("slow");
					return false;
				}
			}
		}
	}, {
		key: 'validaContrasena',
		value: function validaContrasena() {
			var pass = $('#claseContrasenia').val();
			var espacios = false;
			var cont = 0;
			if (pass.length < 1) {
				$("#mensajePassword").fadeOut("slow");
				$("#mensajePasswordImagen").fadeIn("slow");
				return false;
			} else {
				while (!espacios && cont < pass.length) {
					if (pass.charAt(cont) == " ") espacios = true;
					cont++;
				}
				$("#mensajePasswordImagen").fadeOut("slow");
				if (espacios) {
					$("#mensajePassword").fadeIn("slow");
					return false;
				} else $("#mensajePassword").fadeOut("slow");
			}
		}
	}, {
		key: 'validaDNI',
		value: function validaDNI() {
			var erdni = /(^([0-9]{8,8}\-[A-Z])|^)$/;
			var dni = $('#claseDNI').val();
			if (dni.length < 1) {
				$("#mensajeDniImagen").fadeIn("slow");
				return false;
			} else {
				if (!erdni.test(dni)) {
					$("#mensajeDniImagen").fadeOut("slow");
					$("#mensajeDNI").fadeIn("slow");
					return false;
				} else {
					$("#mensajeDniImagen").fadeOut("slow");
					$("#mensajeDNI").fadeOut("slow");
				}
			}
		}
	}, {
		key: 'validaTelefono',
		value: function validaTelefono() {
			var telefono = $('#claseTelefono').val();
			if (isNaN(telefono)) {
				$("#mensajeTelefono2").fadeOut("slow");
				$("#mensajeTelefono").fadeIn("slow");
				return false;
			} else {
				$("#mensajeTelefono").fadeOut("slow");
				if (telefono.length > 1) {
					if (telefono.length > 12 || telefono.length < 6) {
						$("#mensajeTelefono2").fadeIn("slow");
						return false;
					} else {
						$("#mensajeTelefono2").fadeOut("slow");
						return false;
					}
				}
			}
		}
	}]);

	return InputAsep;
}();

$(document).on("ready", inicio);
function inicio() {
	var obj = new InputAsep("classBoton");
}