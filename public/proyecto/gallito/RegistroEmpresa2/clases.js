"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

jQuery.validator.addMethod("emailPersonalizado", function (value, element) {
    return this.optional(element) || /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i.test(value);
}, "Ingrese un correo válido");
jQuery.validator.addMethod("telefono", function (value, element) {
    return this.optional(element) || /^[0-9()#-*-]+([0-9()#-*-]+)*$/i.test(value);
}, "Ingrese telefono válido");
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

var FormularioGallitoRegistro = function () {
    function FormularioGallitoRegistro() {
        _classCallCheck(this, FormularioGallitoRegistro);

        this.iniciarValidate();
        $("#btn-guardarDatos-finta").on("click", this.simularSubmit);
    }

    _createClass(FormularioGallitoRegistro, [{
        key: "iniciarValidate",
        value: function iniciarValidate() {

            $("#formulario-registro-1").validate({
                rules: {
                    name_nombre: {
                        required: true,
                        maxlength: 100
                    },
                    name_Apellidos: {
                        required: true,
                        maxlength: 100
                    },
                    name_Cargo: {
                        required: true
                    },
                    name_telefono: {
                        required: true,
                        telefono: true
                    }

                },
                messages: {},
                highlight: function highlight(element) {
                    $(element).parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv");
                    $(element).addClass('error-validacion');
                },
                unhighlight: function unhighlight(element) {
                    $(element).removeClass('error-validacion');

                    $(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
                    $(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
                },
                errorPlacement: function errorPlacement(error, element) {
                    error.appendTo(element.parent().parent().find(".cont-module-error").find(".error-format"));
                    element.parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv");
                }
            });
        }
    }]);

    return FormularioGallitoRegistro;
}();