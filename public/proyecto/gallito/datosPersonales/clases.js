"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormularioGallito = function () {
  function FormularioGallito() {
    _classCallCheck(this, FormularioGallito);

    this.iniciarValidate();
    this.previwIMage();
    $("#btn-guardarDatos-finta").on("click", this.simularSubmit);
    $("#select_documento").on("change", this.cambiarValidacionTipoDocuemento);
  }

  _createClass(FormularioGallito, [{
    key: "simularSubmit",
    value: function simularSubmit() {
      $(".formulario-gallito-slider").submit();
    }
  }, {
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
    key: "iniciarValidate",
    value: function iniciarValidate() {

      $(".formulario-gallito-slider").validate({
        rules: {
          name_nombre: {
            required: true
          },
          name_apellidos: {
            required: true
          },
          name_sexo: {
            required: true
          },
          name_documento: {
            required: true
          },
          name_telefono_fijo: {
            required: true
          },
          name_celular: {
            required: true
          },
          name_estado_civil: {
            required: true
          },
          name_pais: {
            required: true
          },
          name_departamento: {
            required: true
          },
          name_localidad: {
            required: true
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