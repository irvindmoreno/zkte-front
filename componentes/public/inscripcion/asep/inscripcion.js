"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inscripcion = function () {
	function Inscripcion(etiqueta) {
		_classCallCheck(this, Inscripcion);

		this.etiqueta = etiqueta;
		this.bandera = false;
		$(this.etiqueta).on("click", this.mostrarFormulario);
	}

	_createClass(Inscripcion, [{
		key: "mostrarFormulario",
		value: function mostrarFormulario() {
			this.bandera = !this.bandera;
			if (this.bandera) {
				$(".FechaConTituloContenido-Derecha-Formulario").css("height", "9em");
			} else {
				$(".FechaConTituloContenido-Derecha-Formulario").css("height", "0em");
			}
		}
	}]);

	return Inscripcion;
}();