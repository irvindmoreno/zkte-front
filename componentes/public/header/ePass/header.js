"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderEPass = function () {
	function HeaderEPass() {
		_classCallCheck(this, HeaderEPass);

		this.estadoMenuMovil = false;
		$(".Boton-Movil i").on("click", this.mostrarMenuMovil);
	}

	_createClass(HeaderEPass, [{
		key: "mostrarMenuMovil",
		value: function mostrarMenuMovil() {
			this.estadoMenuMovil = !this.estadoMenuMovil;
			if (this.estadoMenuMovil) {
				$(".Navegacion-Menu-Movil").css("height", "13em");
			} else {
				$(".Navegacion-Menu-Movil").css("height", "0px");
			}
		}
	}]);

	return HeaderEPass;
}();