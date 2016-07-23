"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectAsep = function () {
	function SelectAsep(boton, idSelect, required) {
		_classCallCheck(this, SelectAsep);

		this.idSelect = idSelect;
		$('.' + this.idSelect).on("change", { idSelect: this.idSelect }, this.validarSelect);
		if (required) {
			$("." + boton).on("click", { idSelect: this.idSelect }, this.validarSelect);
		}
	}

	_createClass(SelectAsep, [{
		key: "validarSelect",
		value: function validarSelect(event) {
			var idSelect = event.data.idSelect;
			var optionInicial = $("." + idSelect).children('option').val();
			var optionSeleccionado = $("." + idSelect).val();
			if (optionInicial == optionSeleccionado) {
				event.preventDefault();
				$('.' + idSelect).siblings('span').removeClass("InputInvalidado");
				$('.' + idSelect).siblings('span').addClass("inputValido");
			} else {
				$('.' + idSelect).siblings('span').removeClass("inputValido");
				$('.' + idSelect).siblings('span').addClass("InputInvalidado");
			}
		}
	}]);

	return SelectAsep;
}();
//var selectAsep=new SelectAsep("btn","idSelect",true)