"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colorDesactivadoNumero;
var colorDesactivadoTitulo;
var colorDesactivadaLetraContenido;
var colorAcitvadoNumero;
var colorAcitvadoTitulo;
var colorAcitvadoLetraContenido;

var TabsGallito = function () {
	function TabsGallito() {
		_classCallCheck(this, TabsGallito);

		$(".pestaniasPadre").children("div").css("display", "none");
		$(".pestaniasPadre").children("div:nth-child(1)").css("display", "block");
	}

	_createClass(TabsGallito, [{
		key: "mostrarDiv",
		value: function mostrarDiv(color) {
			var pestania = parseInt($(this).attr("data"));
			$(".pestaniasPadre").children("div").css("display", "none");
			$(".pestaniasPadre").children("div:nth-child(" + pestania + ")").css("display", "block");
		}
	}, {
		key: "setBackgroundSeleccionadoCirculo",
		value: function setBackgroundSeleccionadoCirculo(background) {
			this.backgroundSeleccionadoCirculo = background;
		}
	}, {
		key: "setColorSeleccionadoTitulo",
		value: function setColorSeleccionadoTitulo(color) {
			this.colorSeleccionadoTitulo = color;
		}
	}, {
		key: "setColorContenidoSeleccionado",
		value: function setColorContenidoSeleccionado(color) {
			this.colorContenidoSeleccionado = color;
		}
	}, {
		key: "setBackgroundPestaniaSeleccionado",
		value: function setBackgroundPestaniaSeleccionado(background) {
			this.backgrounPestaniaSeleccionado = background;
		}
	}, {
		key: "setBackgroundNumeroPestaniaDesactivada",
		value: function setBackgroundNumeroPestaniaDesactivada(background) {
			this.backgroundNumeroPestaniaDesactivada = background;
		}
	}, {
		key: "setBackgroundTituloPestaniaDesactivada",
		value: function setBackgroundTituloPestaniaDesactivada(background) {
			this.backgroundTituloPestaniaDesactivada = background;
		}
	}, {
		key: "setColorContenidoPestaniaDesactivada",
		value: function setColorContenidoPestaniaDesactivada(background) {
			this.colorContenidoPestaniaDesactivada = background;
		}
	}]);

	return TabsGallito;
}();

var obj = new TabsGallito();