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

        this.previwIMage();
        this.iniciarValidate();
        $("#btn-guardarDatos-finta").on("click", this.simularSubmit);
        $("#select_documento").on("change", this.cambiarValidacionTipoDocuemento);
    }

    _createClass(FormularioGallitoRegistro, [{
        key: "cambiarValidacionTipoDocuemento",
        value: function cambiarValidacionTipoDocuemento() {
            $("#id_nro_documento").removeAttr("disabled");
            $("#id_nro_documento").rules("remove");

            var select = $(this).val();
            if (select == 1) // ese es rut
                {
                    $("#id_nro_documento").attr("placeholder", "Ingrese número de RUT");
                    $("#id_nro_documento").rules("add", {
                        maxlength: 11,
                        number: true
                    });
                } else if (select == 2) // es ci
                {
                    $("#id_nro_documento").attr("placeholder", "Ingrese CI");
                    $("#id_nro_documento").rules("add", {
                        maxlength: 12,
                        number: true
                    });
                } else if (select == 3) // documento extranjero
                {
                    $("#id_nro_documento").attr("placeholder", "Ingrese documento extranjero");
                    $("#id_nro_documento").rules("add", {
                        maxlength: 7,
                        number: true
                    });
                }
        }
    }, {
        key: "previwIMage",
        value: function previwIMage() {
            $("#archivo").change(function () {
                if (this.files && this.files[0]) {
                    $(".text-gallito-img-upload").addClass("hideDiv");
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        $('#image_upload_preview').attr('src', e.target.result);
                    };

                    reader.readAsDataURL(this.files[0]);
                }
            });
        }
    }, {
        key: "limpiarFormulario",
        value: function limpiarFormulario(div) {
            $(div + " select").each(function (index) {
                var idSelect = $(this).attr("id");
                $("#" + idSelect).prop('selectedIndex', 0);
                $("#" + idSelect).trigger("change");
            });
            $(div + " textarea").each(function (index) {
                var idSelect = $(this).attr("id");
                $("#" + idSelect).val(" ");
            });
        }
    }, {
        key: "iniciarValidate",
        value: function iniciarValidate() {

            $("#formulario-registro-1").validate({
                rules: {
                    name_nombre_comercial: {
                        required: true,
                        maxlength: 100
                    },
                    name_razon_social: {
                        required: true,
                        maxlength: 100
                    },
                    name_rubro: {
                        required: true
                    },
                    name_web: {
                        url: true
                    },
                    name_correo: {
                        required: true,
                        emailPersonalizado: true
                    },
                    name_pasword: {
                        required: true
                    },
                    name_pasword_repeat: {
                        required: true,
                        equalTo: "#id_repeat_psw"
                    },
                    name_telefono: {
                        required: true,
                        telefono: true
                    },
                    name_celular: {
                        required: true,
                        telefono: true
                    },
                    name_localidad: {
                        required: true
                    },
                    name_departamento: {
                        required: true
                    },
                    name_pais: {
                        required: true
                    },
                    name_documento: {
                        required: true
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