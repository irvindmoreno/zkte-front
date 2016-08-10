"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalGallito = function () {
    function ModalGallito() {
        _classCallCheck(this, ModalGallito);

        this.validator;
        this.validacion();
        $(".btn").on("click", { obj: this }, this.abrirModal);
    }

    _createClass(ModalGallito, [{
        key: "abrirModal",
        value: function abrirModal(event) {
            var validator = event.data.obj.validator;
            validator.resetForm();
            $("#modal-gallito").modal("show");
        }
    }, {
        key: "validacion",
        value: function validacion() {
            this.validator = $("#form-recuperar-clave").validate({
                rules: {
                    correo: {
                        required: true,
                        email: true
                    }
                }
            });
        }
    }]);

    return ModalGallito;
}();

var obj = new ModalGallito();