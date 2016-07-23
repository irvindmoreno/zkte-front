"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputTextAsep = function () {
	function InputTextAsep(boton, input) {
		_classCallCheck(this, InputTextAsep);

		this.input = input;
		this.boton = boton;
		this.comprobarInput();
	}

	_createClass(InputTextAsep, [{
		key: "comprobarInput",
		value: function comprobarInput() {
			if (this.input == "EmailValidar") {
				$(".EmailValidar").on("keyup", { input: this.input }, this.validarEmail);
				$("." + this.boton).on("click", { input: this.input }, this.validarEmail);
			} else if (this.input == "NombreValidar") {
				$(".NombreValidar").on("keyup", { input: this.input }, this.validarNombre);
				$("." + this.boton).on("click", { input: this.input }, this.validarNombre);
			} else if (this.input == "ApellidoValidar") {
				$(".ApellidoValidar").on("keyup", { input: this.input }, this.validarNombre);
				$("." + this.boton).on("click", { input: this.input }, this.validarNombre);
			} else if (this.input == "ContraseniaValidar") {
				$(".ContraseniaValidar").on("keyup", { input: this.input }, this.validarContrasenia);
				$("." + this.boton).on("click", { input: this.input }, this.validarContrasenia);
			} else if (this.input == "DniValidar") {
				$(".DniValidar").on("keyup", { input: this.input }, this.validarDNI);
				$("." + this.boton).on("click", { input: this.input }, this.validarDNI);
			} else if (this.input == "RucValidar") {
				$(".RucValidar").on("keyup", { input: this.input }, this.validarRUC);
				$("." + this.boton).on("click", { input: this.input }, this.validarRUC);
			} else if (this.input == "TelefonoValidar") {
				$(".TelefonoValidar").on("keyup", { input: this.input }, this.validarTelefono);
				$("." + this.boton).on("click", { input: this.input }, this.validarTelefono);
			}
		}
	}, {
		key: "validarTelefono",
		value: function validarTelefono(event) {
			var input = event.data.input;
			var tamanioInput = $('.' + input).val().length;
			if (tamanioInput == 12) {
				var expresion = $('.' + input).val().match(/^[0-9]+$/);
				//Se utiliza la funcion test() nativa de JavaScript
				if (expresion) {
					$(this).css("border", "1px solid #808080");
					$('.' + input).siblings('span').removeClass("inputValido");
					$('.' + input).siblings('span').addClass("InputInvalidado");
				} else {
					event.preventDefault();
					$(this).css("border", "2px solid #2ca7df");
					$('.' + input).siblings('span').removeClass("InputInvalidado");
					$('.' + input).siblings('span').addClass("inputValido");
				}
			} else {
				event.preventDefault();
				$(this).css("border", "2px solid #2ca7df");
				$('.' + input).siblings('span').removeClass("InputInvalidado");
				$('.' + input).siblings('span').addClass("inputValido");
			}
		}
	}, {
		key: "validarRUC",
		value: function validarRUC(event) {
			var input = event.data.input;
			var tamanioInput = $('.' + input).val().length;

			if (tamanioInput == 11) {
				var expresion = $('.' + input).val().match(/^[0-9]+$/);
				//Se utiliza la funcion test() nativa de JavaScript
				if (expresion) {
					$(this).css("border", "1px solid #808080");
					$('.' + input).siblings('span').removeClass("inputValido");
					$('.' + input).siblings('span').addClass("InputInvalidado");
				} else {
					event.preventDefault();
					$(this).css("border", "2px solid #2ca7df");
					$('.' + input).siblings('span').removeClass("InputInvalidado");
					$('.' + input).siblings('span').addClass("inputValido");
				}
			} else {
				event.preventDefault();
				$(this).css("border", "2px solid #2ca7df");
				$('.' + input).siblings('span').removeClass("InputInvalidado");
				$('.' + input).siblings('span').addClass("inputValido");
			}
		}
	}, {
		key: "validarDNI",
		value: function validarDNI(event) {
			var input = event.data.input;
			var tamanioInput = $('.' + input).val().length;
			console.log(tamanioInput);
			if (tamanioInput == 8) {
				var expresion = $('.' + input).val().match(/^[0-9]+$/);
				//Se utiliza la funcion test() nativa de JavaScript
				if (expresion) {
					$(this).css("border", "1px solid #808080");
					$('.' + input).siblings('span').removeClass("inputValido");
					$('.' + input).siblings('span').addClass("InputInvalidado");
				} else {
					event.preventDefault();
					$(this).css("border", "2px solid #2ca7df");
					$('.' + input).siblings('span').removeClass("InputInvalidado");
					$('.' + input).siblings('span').addClass("inputValido");
				}
			} else {
				event.preventDefault();
				$(this).css("border", "2px solid #2ca7df");
				$('.' + input).siblings('span').removeClass("InputInvalidado");
				$('.' + input).siblings('span').addClass("inputValido");
			}
		}
	}, {
		key: "validarContrasenia",
		value: function validarContrasenia(event) {
			var input = event.data.input;
			var tamanioInput = $('.' + input).val().length;

			if (tamanioInput > 0 && tamanioInput < 9) {
				var expresion = $('.' + input).val().match(/^[a-z0-9\sáéíóúñ.,_\-\&\/]+$/i);
				//Se utiliza la funcion test() nativa de JavaScript
				if (expresion) {
					$(this).css("border", "1px solid #808080");
					$('.' + input).siblings('span').removeClass("inputValido");
					$('.' + input).siblings('span').addClass("InputInvalidado");
				} else {
					event.preventDefault();
					$(this).css("border", "2px solid #2ca7df");
					$('.' + input).siblings('span').removeClass("InputInvalidado");
					$('.' + input).siblings('span').addClass("inputValido");
				}
			} else {
				event.preventDefault();
				$(this).css("border", "2px solid #2ca7df");
				$('.' + input).siblings('span').removeClass("InputInvalidado");
				$('.' + input).siblings('span').addClass("inputValido");
			}
		}
	}, {
		key: "validarEmail",
		value: function validarEmail(event) {
			var input = event.data.input;
			var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
			var expresionaEvaluar = regex.test($('.' + input).val().trim());
			//Se utiliza la funcion test() nativa de JavaScript
			if (expresionaEvaluar) {
				$(this).css("border", "1px solid #808080");
				$('.' + input).siblings('span').removeClass("inputValido");
				$('.' + input).siblings('span').addClass("InputInvalidado");
			} else {
				event.preventDefault();
				$(this).css("border", "2px solid #2ca7df");
				$('.' + input).siblings('span').removeClass("InputInvalidado");
				$('.' + input).siblings('span').addClass("inputValido");
			}
		}
	}, {
		key: "validarNombre",
		value: function validarNombre(event) {
			var input = event.data.input;
			var tamanioInput = $('.' + input).val().length;
			if (tamanioInput > 0 && tamanioInput < 110) {
				var expresion = $('.' + input).val().match('^[a-zA-Z_áéíóúñ\s]*$');
				//Se utiliza la funcion test() nativa de JavaScript
				if (expresion) {
					$(this).css("border", "1px solid #808080");
					$('.' + input).siblings('span').removeClass("inputValido");
					$('.' + input).siblings('span').addClass("InputInvalidado");
				} else {
					event.preventDefault();
					$(this).css("border", "2px solid #2ca7df");
					$('.' + input).siblings('span').removeClass("InputInvalidado");
					$('.' + input).siblings('span').addClass("inputValido");
				}
			} else {
				event.preventDefault();
				$(this).css("border", "2px solid #2ca7df");
				$('.' + input).siblings('span').removeClass("InputInvalidado");
				$('.' + input).siblings('span').addClass("inputValido");
			}
		}
	}]);

	return InputTextAsep;
}();
//var inputTextAsep = new InputTextAsep("btn-submit","DniValidar");
//var inputTextAsep = new InputTextAsep("btn-submit","RucValidar");
/*
var inputTextAsep = new InputTextAsep("btn-submit","EmailValidar");
//var inputTextAsep = new InputTextAsep("btn-submit","TelefonoValidar");

var inputTextAsep = new InputTextAsep("btn-submit","EmailValidar");
var inputTextAsep = new InputTextAsep("btn-submit","NombreValidar");
var inputTextAsep = new InputTextAsep("btn-submit","ApellidoValidar");
var inputTextAsep = new InputTextAsep("btn-submit","ContraseniaValidar");
var inputTextAsep = new InputTextAsep("btn-submit","DniValidar");
var inputTextAsep = new InputTextAsep("btn-submit","TelefonoValidar");*/