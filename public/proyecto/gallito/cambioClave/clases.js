"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormularioGallito = function () {
    function FormularioGallito() {
        _classCallCheck(this, FormularioGallito);

        this.iniciarValidate();
        $("#btn-guardarDatos-finta").on("click", this.simularSubmit);
    }

    _createClass(FormularioGallito, [{
        key: "simularSubmit",
        value: function simularSubmit() {
            $(".formulario-gallito-slider").submit();
        }
    }, {
        key: "iniciarValidate",
        value: function iniciarValidate() {

            $(".formulario-gallito-slider").validate({
                rules: {
                    nombre_actual_contrasenia: {
                        required: true
                    },
                    name_nueva_contra: {
                        required: true
                    },
                    name_repetir_contra: {
                        required: true,
                        equalTo: "#id_nueva_contra"
                    }

                },
                messages: {}, highlight: function highlight(element) {
                    var bandera = $(element).hasClass("validate-2-select");
                    if (bandera) {
                        $(element).siblings(".cont-module-error").find(".icon-alert").removeClass("hideDiv");
                        $(element).addClass('error-validacion');
                    } else {
                        $(element).parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv");
                        $(element).addClass('error-validacion');
                    }
                },
                unhighlight: function unhighlight(element) {
                    $(element).removeClass('error-validacion');
                    var bandera = $(element).hasClass("validate-2-select");
                    if (bandera) {
                        $(element).siblings(".cont-module-error").find(".icon-alert").addClass("hideDiv");
                        $(element).siblings(".cont-module-error").find(".icon-alert").addClass("hideDiv");
                    } else {
                        $(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
                        $(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
                    }
                },
                errorPlacement: function errorPlacement(error, element) {
                    var bandera = $(element).hasClass("validate-2-select");
                    if (bandera) {
                        error.appendTo(element.siblings(".cont-module-error").find(".error-format"));
                        element.siblings(".cont-module-error").find(".icon-alert").removeClass("hideDiv");
                    } else {
                        error.appendTo(element.parent().parent().find(".cont-module-error").find(".error-format"));
                        element.parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv");
                    }
                }

            });
        }
    }]);

    return FormularioGallito;
}();