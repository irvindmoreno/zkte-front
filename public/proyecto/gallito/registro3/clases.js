"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormularioContador = function () {
    function FormularioContador() {
        _classCallCheck(this, FormularioContador);

        this.validacion();
    }

    _createClass(FormularioContador, [{
        key: "validacion",
        value: function validacion() {
            $("#formulario-registro-3").validate({
                rules: {
                    name_rut: {
                        required: true
                    },
                    name_razon_social: {
                        required: true
                    },
                    name_ci: {
                        required: true
                    }
                }, highlight: function highlight(element) {
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

    return FormularioContador;
}();