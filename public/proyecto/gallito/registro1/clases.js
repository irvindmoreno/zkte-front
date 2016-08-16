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

var nroSliderEstudios = 0;
var nroSliderExperiencia = 0;
var nroSliderIdioma = 0;
var nroSliderPrograma = 0;
var nroSliderPregunta = 0;
function Estudios(carreraText, carreraVal, tipoCarreraText, tipoCarreraVal, nivelText, nivelVal) {
  this.carreraText = carreraText;
  this.carreraVal = carreraVal;
  this.tipoCarreraText = tipoCarreraText;
  this.tipoCarreraVal = tipoCarreraVal;
  this.nivelText = nivelText;
  this.nivelVal = nivelVal;
}
function Experiencia(nivelCargoText, nivelCargoVal, areaText, areaVal, tiempoText, tiempoVal) {
  this.nivelCargoText = nivelCargoText;
  this.nivelCargoVal = nivelCargoVal;
  this.areaText = areaText;
  this.areaVal = areaVal;
  this.tiempoText = tiempoText;
  this.tiempoVal = tiempoVal;
}

function Idioma(idiomaText, idiomaVal, nivelText, nivelVal) {
  this.idiomaText = idiomaText;
  this.idiomaVal = idiomaVal;
  this.nivelText = nivelText;
  this.nivelVal = nivelVal;
}
function Programa(programaText, programaVal, nivelText, nivelVal) {
  this.programaText = programaText;
  this.programaVal = programaVal;
  this.nivelText = nivelText;
  this.nivelVal = nivelVal;
}
function Pregunta(preguntaText) {
  this.preguntaText = preguntaText;
}

var FormularioGallitoRegistro = function () {
  function FormularioGallitoRegistro() {
    _classCallCheck(this, FormularioGallitoRegistro);

    this.previwIMage();
    this.arrayEstudios = [];
    this.arrayExperiencia = [];
    this.arrayIdioma = [];
    this.arrayPrograma = [];
    this.arrayPregunta = [];
    this.iniciarValidate();
    $("#addEstudio").on("click", { obj: this }, this.addEstudio);
    $("#addExperiancia").on("click", { obj: this }, this.addExperiancia);
    $("#addIdioma").on("click", { obj: this }, this.addIdioma);
    $("#addPrograma").on("click", { obj: this }, this.addPrograma);
    $("#addPregunta").on("click", { obj: this }, this.addPregunta);
    $("#btn-guardarDatos-finta").on("click", this.simularSubmit);
    $(".block-desplegable-rectangle").on("click", this.desplegarForm);
  }

  _createClass(FormularioGallitoRegistro, [{
    key: "desplegarForm",
    value: function desplegarForm() {
      $(this).siblings(".contenedor-desplegado").slideToggle("fast");
      if ($(this).find(".icon-down-filter").hasClass("hideDiv")) {
        $(this).addClass("bg-blue");
        $(this).find(".icon-down-filter").removeClass("hideDiv");
        $(this).find(".icon-up-filter").addClass("hideDiv");
      } else {
        $(this).find(".icon-up-filter").removeClass("hideDiv");
        $(this).find(".icon-down-filter").addClass("hideDiv");
        $(this).removeClass("bg-blue");
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
    key: "drawTamplateAddHability",
    value: function drawTamplateAddHability(idTemplate, contenido, nroId, tipo, template, arrayValidaciones, objeto) {
      var idCuadroFade = "contenedor-fade-in-" + tipo + nroId;
      var template = "<div class=\"cuadro-item cuatro-item-created\" id=\"" + idCuadroFade + "\">\n            <div class=\"cuadro-item-title\">\n                <span>" + contenido + "</span>\n                <i class=\"fa fa-floppy-o style-save " + tipo + "-" + nroId + " hideDiv\" value=\"" + nroId + "\" tipo=\"" + tipo + "\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-angle-double-down style-icon-cuadro-item icon-desplagate-cuadro-item\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-times close-hability style-close\" id=\"" + tipo + "-" + nroId + "\" value=\"" + nroId + "\" tipo=\"" + tipo + "\" aria-hidden=\"true\"></i>\n            </div>\n            <div id=\"desplegable-" + tipo + "-" + nroId + "\" class=\"contenido-deplegable hideDiv cuadro-item-cont-desplegado\">\n                " + template + "\n            </div>\n    \t</div>";
      $(idTemplate).append(template);
      console.log(objeto);
      $("#" + idCuadroFade).fadeIn("slow", function (event) {
        for (var i in arrayValidaciones) {
          console.log(arrayValidaciones[i]);
          $(arrayValidaciones[i]).rules("add", {
            required: true
          });
          switch (tipo) {
            case "estudios":
              /*****************Seteando Estudios*********************/
              if (arrayValidaciones[i] == "#select_carrera_profesional-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.carreraVal);
                $(arrayValidaciones[i]).change();
              } else if (arrayValidaciones[i] == "#select_tipo_carrera-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.tipoCarreraVal);
                $(arrayValidaciones[i]).change();
              } else if (arrayValidaciones[i] == "#select_nivel-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.nivelVal);
                $(arrayValidaciones[i]).change();
              }
              /*****************Seteando Estudios*********************/
              break;
            case "experiencia":
              /*****************Seteando Experiencia*********************/
              if (arrayValidaciones[i] == "#id_nivel_cargo-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.nivelCargoVal);
                $(arrayValidaciones[i]).change();
              } else if (arrayValidaciones[i] == "#id_select_area-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.areaVal);
                $(arrayValidaciones[i]).change();
              } else if (arrayValidaciones[i] == "#id_select_tiempo_experiencia-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.tiempoVal);
                $(arrayValidaciones[i]).change();
              }
              /*****************Seteando Experiencia*********************/
              break;
            case "idioma":
              /*****************Seteando Idioma*********************/
              if (arrayValidaciones[i] == "#id_select_idioma-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.idiomaVal);
                $(arrayValidaciones[i]).change();
              } else if (arrayValidaciones[i] == "#id_select_nivel_idioma-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.nivelVal);
                $(arrayValidaciones[i]).change();
              }
              /*****************Seteando Idioma*********************/
              break;
            case "programa":
              /*****************Seteando Idioma*********************/
              if (arrayValidaciones[i] == "#id_select_programa-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.programaVal);
                $(arrayValidaciones[i]).change();
              } else if (arrayValidaciones[i] == "#id_select_nivel_programa-" + nroId) {
                $(arrayValidaciones[i]).val(objeto.nivelVal);
                $(arrayValidaciones[i]).change();
              }
              /*****************Seteando Idioma*********************/
              break;
            case "pregunta":
              break;
          }
        }
      }).css("display", "inline-block");;
      $(".close-hability").off("click");
      $(".close-hability").on("click", { obj: this }, this.deleteItem);
      $(".icon-desplagate-cuadro-item").off("click");
      $(".icon-desplagate-cuadro-item").on("click", { obj: this }, this.desplegarCuadroItem);
      $(".style-save").off("click");
      $(".style-save").on("click", { obj: this }, this.editItem);
    }
  }, {
    key: "editItem",
    value: function editItem() {
      var estadoFinalValidacion = true;
      var idDivDesplagable = $(this).parent().siblings(".contenido-deplegable").attr("id");
      //console.log(idDivDesplagable)
      $("#" + idDivDesplagable + " select").each(function (index) {
        var idSelect = $(this).attr("id");
        console.log(idSelect);
        var estadoValidacion = $("#formulario-registro-1").validate().element("#" + idSelect);

        if (!estadoValidacion) {
          estadoFinalValidacion = "No es valido";
        }
      });
      if (estadoFinalValidacion != "No es valido") {
        $(this).addClass("hideDiv");
        $(this).siblings(".icon-desplagate-cuadro-item").removeClass("hideDiv");
        $(this).parent().siblings(".contenido-deplegable").slideToggle("fast");
      }
    }
  }, {
    key: "desplegarCuadroItem",
    value: function desplegarCuadroItem() {
      $(this).parent().siblings(".contenido-deplegable").slideToggle("fast");
      $(this).addClass("hideDiv");
      $(this).siblings(".style-save").removeClass("hideDiv");
    }
  }, {
    key: "drawPregunta",
    value: function drawPregunta(idTemplate, contenido, nroId, tipo) {
      var idCuadroFade = "contenedor-fade-in-" + tipo + nroId;
      var template = "<div class=\"row spb cuatro-item-created\" id=\"" + idCuadroFade + "\">\n    \t\t<div class=\"col-md-2 spb\"></div>\n\t    \t<div class=\"contenedor-pregunta col-md-7 spb\">\n              <input type=\"hidden\" value=\"" + contenido + "\">\n\t\t\t  <div class=\"row smb\"><span class=\"Text-Pregunta  spb col-xs-11 col-sm-11 col-md-11\">" + contenido + "</span>\n\t\t\t    <div class=\"contenedor-Btn-edit spb col-xs-1 col-sm-1 col-md-1\">\n\t\t\t    \t<i aria-hidden=\"true\" class=\"fa fa-times close-hability\" id=\"" + tipo + "-" + nroId + "\" value=\"" + nroId + "\" tipo=\"" + tipo + "\"></i>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</div>\n    \t</div>";
      $(idTemplate).append(template);
      $("#" + idCuadroFade).fadeIn("slow");
      $(".close-hability").off("click");
      $(".close-hability").on("click", { obj: this }, this.deleteItem);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(event) {
      var idABorrar = $(this).attr("value");
      var tipo = $(this).attr("tipo");
      switch (tipo) {
        case "estudios":
          delete event.data.obj.arrayEstudios[idABorrar];
          console.log(event.data.obj.arrayEstudios);
          $(this).parent().parent().fadeOut("slow", function () {
            $(this).remove();
          });
          break;
        case "experiencia":
          delete event.data.obj.arrayExperiencia[idABorrar];
          console.log(event.data.obj.arrayExperiencia);
          $(this).parent().parent().fadeOut("slow", function () {
            $(this).remove();
          });
          break;
        case "idioma":
          delete event.data.obj.arrayIdioma[idABorrar];
          console.log(event.data.obj.arrayIdioma);
          $(this).parent().parent().fadeOut("slow", function () {
            $(this).remove();
          });
          break;
        case "programa":
          delete event.data.obj.arrayPrograma[idABorrar];
          console.log(event.data.obj.arrayPrograma);
          $(this).parent().parent().fadeOut("slow", function () {
            $(this).remove();
          });
          break;
        case "pregunta":
          delete event.data.obj.arrayPregunta[idABorrar];
          console.log(event.data.obj.arrayPregunta);
          $(this).parent().parent().parent().fadeOut("slow", function () {
            $(this).remove();
          });
          $(".text-saldo-preguntas").removeClass("hideDiv");
          $(".text-sin-preguntas").addClass("hideDiv");
          var numeroPreguntas = parseInt($("#text-number-queda").html());
          $("#text-number-queda").html(numeroPreguntas + 1);
          break;
      }
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
    key: "addPregunta",
    value: function addPregunta(event) {
      var validateIdioma = $("#formulario-registro-1").validate().element("#id_pregunta_candidato");
      var numeroPreguntas = parseInt($("#text-number-queda").html());
      if (validateIdioma && numeroPreguntas > 0) {
        var preguntaText = $("#id_pregunta_candidato").val();
        var pregunta = new Pregunta(preguntaText);
        event.data.obj.drawPregunta("#contenedor-preguntas-add", preguntaText, nroSliderPregunta, "pregunta");
        event.data.obj.limpiarFormulario(".content-textarea-pregunta");
        // Creamos un arreglo para almacenarlos
        event.data.obj.arrayPregunta.push(pregunta);
        nroSliderPregunta = nroSliderPregunta + 1;
        $("#text-number-queda").html(numeroPreguntas - 1);
        console.log(event.data.obj.arrayPregunta);
        if (numeroPreguntas == 1) {
          $(".text-saldo-preguntas").addClass("hideDiv");
          $(".text-sin-preguntas").removeClass("hideDiv");
        }
      }
    }
  }, {
    key: "addPrograma",
    value: function addPrograma(event) {
      var validatePrograma = $("#formulario-registro-1").validate().element("#id_select_programa");
      var validateNivel = $("#formulario-registro-1").validate().element("#id_select_nivel_programa");
      var namesAValidar = [];
      var template = "<div class=\"contenedor-datos-cargo\">\n          <div class=\"row smb cont-file\">\n            <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Programa (*)</span></div>\n            <div class=\"col-sm-6 col-md-7 spb align-middle\">\n              <select id=\"id_select_programa-" + nroSliderPrograma + "\" name=\"select_programa-" + nroSliderPrograma + "\" class=\"input_form_perfil select_color\">\n                <option value=\"\">Seleccione</option>\n                <option value=\"1\">Html</option>\n                <option value=\"2\">Css</option>\n                <option value=\"3\">Javascript</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n              <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n              <div class=\"error-format text-2-line-error\"></div>\n            </div>\n          </div>\n          <div class=\"row smb cont-file\">\n            <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Nivel (*)</span></div>\n            <div class=\"col-sm-6 col-md-7 spb align-middle\">\n              <select name=\"select_nivel_programa-" + nroSliderPrograma + "\" id=\"id_select_nivel_programa-" + nroSliderPrograma + "\" class=\"input_form_perfil select_color\">\n                <option value=\"\">Seleccione</option>\n                <option value=\"1\">Básico</option>\n                <option value=\"2\">Intermedio</option>\n                <option value=\"3\">Avanzado</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n              <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n              <div class=\"error-format text-2-line-error\"></div>\n            </div>\n          </div>\n        </div>";
      if (validatePrograma && validateNivel) {
        var programaText = $("#id_select_programa option:selected").text();
        var programaVal = $("#id_select_programa").val();
        var nivelText = $("#id_select_nivel_programa option:selected").text();
        var nivelVal = $("#id_select_nivel_programa").val();

        var programa = new Programa(programaText, programaVal, nivelText, nivelVal);
        // Creamos un arreglo para almacenarlos

        event.data.obj.arrayPrograma.push(programa);
        namesAValidar.push("#id_select_programa-" + nroSliderPrograma);
        namesAValidar.push("#id_select_nivel_programa-" + nroSliderPrograma);
        event.data.obj.drawTamplateAddHability("#cont-programa-add", programaText, nroSliderPrograma, "programa", template, namesAValidar, programa);
        event.data.obj.limpiarFormulario(".cont-input-programa");
        nroSliderPrograma = nroSliderPrograma + 1;
        console.log(event.data.obj.arrayPrograma);
        $("#id_select_programa option:first").attr("value", 0);
        $("#id_select_nivel_programa option:first").attr("value", 0);
      }
    }
  }, {
    key: "addIdioma",
    value: function addIdioma(event) {
      var validateIdioma = $("#formulario-registro-1").validate().element("#id_select_idioma");
      var validateNivel = $("#formulario-registro-1").validate().element("#id_select_nivel_idioma");
      var namesAValidar = [];
      var template = "<div class=\"contenedor-datos-cargo\">\n          <div class=\"row smb cont-file\">\n            <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Idioma (*)</span></div>\n            <div class=\"col-sm-6 col-md-7 spb align-middle\">\n              <select id=\"id_select_idioma-" + nroSliderIdioma + "\" name=\"select_idioma-" + nroSliderIdioma + "\" class=\"input_form_perfil select_color\">\n                <option value=\"\">Seleccione</option>\n                <option value=\"1\">Inlgés</option>\n                <option value=\"2\">Francés</option>\n                <option value=\"3\">Aleman</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n              <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n              <div class=\"error-format text-2-line-error\"></div>\n            </div>\n          </div>\n          <div class=\"row smb cont-file\">\n            <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Nivel (*)</span></div>\n            <div class=\"col-sm-6 col-md-7 spb align-middle\">\n              <select name=\"select_nivel_idioma-" + nroSliderIdioma + "\" id=\"id_select_nivel_idioma-" + nroSliderIdioma + "\" class=\"input_form_perfil select_color\">\n                <option value=\"\">Seleccione</option>\n                <option value=\"1\">Básico</option>\n                <option value=\"2\">Intermedio</option>\n                <option value=\"3\">Avanzado</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n              <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n              <div class=\"error-format text-2-line-error\"></div>\n            </div>\n          </div>\n        </div>";
      if (validateIdioma && validateNivel) {
        var idiomaText = $("#id_select_idioma option:selected").text();
        var idiomaVal = $("#id_select_idioma").val();
        var nivelText = $("#id_select_nivel_idioma option:selected").text();
        var nivelVal = $("#id_select_nivel_idioma").val();

        var idioma = new Idioma(idiomaText, idiomaVal, nivelText, nivelVal);
        // Creamos un arreglo para almacenarlos

        event.data.obj.arrayIdioma.push(idioma);
        namesAValidar.push("#id_select_idioma-" + nroSliderIdioma);
        namesAValidar.push("#id_select_nivel_idioma-" + nroSliderIdioma);
        event.data.obj.drawTamplateAddHability("#cont-idioma-add", idiomaText, nroSliderIdioma, "idioma", template, namesAValidar, idioma);
        event.data.obj.limpiarFormulario(".cont-input-idioma");
        nroSliderIdioma = nroSliderIdioma + 1;
        console.log(event.data.obj.arrayIdioma);
      }
      $("#id_select_idioma option:first").attr("value", 0);
      $("#id_select_nivel_idioma option:first").attr("value", 0);
    }
  }, {
    key: "addExperiancia",
    value: function addExperiancia(event) {
      //$('input[name="select_carrera_profesional"]').valid();
      var validateNivelCargo = $("#formulario-registro-1").validate().element("#id_nivel_cargo");
      var validateArea = $("#formulario-registro-1").validate().element("#id_select_area");
      var validateTiempo = $("#formulario-registro-1").validate().element("#id_select_tiempo_experiencia");
      var namesAValidar = [];
      var template = "<div class=\"contenedor-datos-cargo\">\n          <div class=\"row smb cont-file\">\n            <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Nivel del cargo (*)</span></div>\n            <div class=\"col-sm-6 col-md-7 spb align-middle\">\n              <select id=\"id_nivel_cargo-" + nroSliderExperiencia + "\" name=\"select_nivel_cargo-" + nroSliderExperiencia + "\" class=\"input_form_perfil select_color\">\n                <option value=\"\">Seleccione</option>\n                <option value=\"1\">Informática</option>\n                <option value=\"2\">Sistemas</option>\n                <option value=\"3\">Idiomas</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n              <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n              <div class=\"error-format text-2-line-error\"></div>\n            </div>\n          </div>\n          <div class=\"row smb cont-file\">\n            <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Area (*)</span></div>\n            <div class=\"col-sm-6 col-md-7 spb align-middle\">\n              <select name=\"select_area-" + nroSliderExperiencia + "\" id=\"id_select_area-" + nroSliderExperiencia + "\" class=\"input_form_perfil select_color\">\n                <option value=\"\">Seleccione</option>\n                <option value=\"1\">Informática</option>\n                <option value=\"2\">Sistemas</option>\n                <option value=\"3\">Idiomas</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n              <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n              <div class=\"error-format text-2-line-error\"></div>\n            </div>\n          </div>\n          <div class=\"row smb cont-file\">\n            <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Tiempo de experiencia (*)</span></div>\n            <div class=\"col-sm-6 col-md-7 spb align-middle\">\n              <select name=\"slect_tiempo_experiencia-" + nroSliderExperiencia + "\" id=\"id_select_tiempo_experiencia-" + nroSliderExperiencia + "\" class=\"input_form_perfil select_color\">\n                <option value=\"\">Seleccione</option>\n                <option value=\"1\">Informática</option>\n                <option value=\"2\">Sistemas</option>\n                <option value=\"3\">Idiomas</option>\n              </select>\n            </div>\n            <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n              <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n              <div class=\"error-format text-2-line-error\"></div>\n            </div>\n          </div>\n        </div>";
      if (validateNivelCargo && validateArea && validateTiempo) {
        var nivelCargoText = $("#id_nivel_cargo option:selected").text();
        var nivelCargoVal = $("#id_nivel_cargo").val();
        var areaText = $("#id_select_area option:selected").text();
        var areaVal = $("#id_select_area").val();
        var tiempoText = $("#id_select_tiempo_experiencia option:selected").text();
        var tiempoVal = $("#id_select_tiempo_experiencia").val();

        var experiencia = new Experiencia(nivelCargoText, nivelCargoVal, areaText, areaVal, tiempoText, tiempoVal);

        // Creamos un arreglo para almacenarlos

        event.data.obj.arrayExperiencia.push(experiencia);
        namesAValidar.push("#id_nivel_cargo-" + nroSliderExperiencia);
        namesAValidar.push("#id_select_area-" + nroSliderExperiencia);
        namesAValidar.push("#id_select_tiempo_experiencia-" + nroSliderExperiencia);
        event.data.obj.drawTamplateAddHability("#cont-experiencia-add", nivelCargoText, nroSliderExperiencia, "experiencia", template, namesAValidar, experiencia);
        event.data.obj.limpiarFormulario(".cont-input-experiencia");
        nroSliderExperiencia = nroSliderExperiencia + 1;
        console.log(event.data.obj.arrayExperiencia);
      }
      $("#id_nivel_cargo option:first").attr("value", 0);
      $("#id_select_area option:first").attr("value", 0);
      $("#id_select_tiempo_experiencia option:first").attr("value", 0);
    }
  }, {
    key: "addEstudio",
    value: function addEstudio(event) {

      //$('input[name="select_carrera_profesional"]').valid();
      var validateCarrera = $("#formulario-registro-1").validate().element("#id_select_carrera");
      var validateTipoCarrera = $("#formulario-registro-1").validate().element("#id_select_tipo_carrera");
      var validateNivel = $("#formulario-registro-1").validate().element("#id_select_nivel");
      var namesAValidar = [];
      if (validateCarrera && validateTipoCarrera && validateNivel) {
        var carreraText = $("#id_select_carrera option:selected").text();
        var carreraVal = $("#id_select_carrera").val();
        var tipoCarreraText = $("#id_select_tipo_carrera option:selected").text();
        var tipoCarreraVal = $("#id_select_tipo_carrera").val();
        var nivelText = $("#id_select_nivel option:selected").text();
        var nivelVal = $("#id_select_nivel").val();

        var estudio = new Estudios(carreraText, carreraVal, tipoCarreraText, tipoCarreraVal, nivelText, nivelVal);

        // Creamos un arreglo para almacenarlos

        event.data.obj.arrayEstudios.push(estudio);
        var template = "<div class=\"contenedor-datos-cargo\">\n                  <div class=\"row smb cont-file\">\n                    <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Carrera (*)</span></div>\n                    <div class=\"col-sm-6 col-md-7 spb align-middle\">\n                      <select id=\"select_carrera_profesional-" + nroSliderEstudios + "\" name=\"select_carrera_profesional-" + nroSliderEstudios + "\" class=\"input_form_perfil select_color\">\n                        <option value=\"\">Seleccione</option>\n                        <option value=\"1\">Informática</option>\n                        <option value=\"2\">Sistemas</option>\n                        <option value=\"3\">Idiomas</option>\n                      </select>\n                    </div>\n                    <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n                      <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n                      <div class=\"error-format text-2-line-error\"></div>\n                    </div>\n                  </div>\n                  <div class=\"row smb cont-file\">\n                    <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Tipo de carrera (*)</span></div>\n                    <div class=\"col-sm-6 col-md-7 spb align-middle\">\n                      <select name=\"select_tipo_carrera-" + nroSliderEstudios + "\" id=\"select_tipo_carrera-" + nroSliderEstudios + "\" class=\"input_form_perfil select_color\">\n                        <option value=\"\">Seleccione</option>\n                        <option value=\"1\">Informática</option>\n                        <option value=\"2\">Sistemas</option>\n                        <option value=\"3\">Idiomas</option>\n                      </select>\n                    </div>\n                    <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n                      <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n                      <div class=\"error-format text-2-line-error\"></div>\n                    </div>\n                  </div>\n                  <div class=\"row smb cont-file\">\n                    <div class=\"col-sm-3 col-md-2 spb align-middle-text\"><span class=\"text-2-line \">Nivel (*)</span></div>\n                    <div class=\"col-sm-6 col-md-7 spb align-middle\">\n                      <select name=\"select_nivel-" + nroSliderEstudios + "\" id=\"select_nivel-" + nroSliderEstudios + "\" class=\"input_form_perfil select_color\">\n                        <option value=\"\">Seleccione</option>\n                        <option value=\"1\">Informática</option>\n                        <option value=\"2\">Sistemas</option>\n                        <option value=\"3\">Idiomas</option>\n                      </select>\n                    </div>\n                    <div class=\"col-sm-3 col-md-3 spb align-middle-text cont-module-error\">\n                      <div class=\"icon-alert icon-inline icon-alert-left hideDiv\"></div>\n                      <div class=\"error-format text-2-line-error\"></div>\n                    </div>\n                  </div>\n                </div>\n                ";
        namesAValidar.push("#select_carrera_profesional-" + nroSliderEstudios);
        namesAValidar.push("#select_tipo_carrera-" + nroSliderEstudios);
        namesAValidar.push("#select_nivel-" + nroSliderEstudios);
        event.data.obj.drawTamplateAddHability("#cont-estudio-add", carreraText, nroSliderEstudios, "estudios", template, namesAValidar, estudio);
        event.data.obj.limpiarFormulario(".cont-input-estudios");
        nroSliderEstudios = nroSliderEstudios + 1;
        console.log(event.data.obj.arrayEstudios);
        $("#id_select_carrera option:first").attr("value", 0);
        $("#id_select_tipo_carrera option:first").attr("value", 0);
        $("#id_select_nivel option:first").attr("value", 0);
      }
    }
  }, {
    key: "iniciarValidate",
    value: function iniciarValidate() {

      $("#formulario-registro-1").validate({
        rules: {
          titulo_aviso: {
            required: true
          },
          select_carrera_profesional: {
            required: true
          },
          select_tipo_carrera: {
            required: true
          },
          select_nivel: {
            required: true
          },
          select_nivel_cargo: {
            required: true
          },
          select_area: {
            required: true
          },
          slect_tiempo_experiencia: {
            required: true
          },
          select_idioma: {
            required: true
          },
          select_nivel_idioma: {
            required: true
          },
          select_programa: {
            required: true
          },
          select_nivel_programa: {
            required: true
          },
          name_tipo_cargo: {
            required: true
          },
          name_funciones: {
            required: true
          },
          name_responsabilidades: {
            required: true
          },
          name_departamento: {
            required: true
          },
          name_select_departamento: {
            required: true
          },
          name_select_localidad: {
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