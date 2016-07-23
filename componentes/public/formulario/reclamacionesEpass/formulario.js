"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormularioReclamacionesEpass = function () {
	function FormularioReclamacionesEpass() {
		_classCallCheck(this, FormularioReclamacionesEpass);

		this.banderaPersona = true;
		$(".radioSelectedCliente").on("change", this.cambiarDeCliente);
	}

	_createClass(FormularioReclamacionesEpass, [{
		key: "cambiarDeCliente",
		value: function cambiarDeCliente() {

			var radio = $(this).val();
			if (radio == "radioPersonaNatural") {
				$(".formularioPersonaNaturalAOcultar").css("display", "block");
				$(".formularioEmpresa").css("display", "none");
			} else if ("radioEmpresa") {
				$(".formularioPersonaNaturalAOcultar").css("display", "none");
				$(".formularioEmpresa").css("display", "block");
			}
		}
	}]);

	return FormularioReclamacionesEpass;
}();

$(document).on("ready", inicio);
function inicio() {
	var obj = new FormularioReclamacionesEpass();
}