"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IconsGallitoPerfil = function () {
    function IconsGallitoPerfil(idIconoSeleccionado) {
        _classCallCheck(this, IconsGallitoPerfil);

        this.hoverCirculos(idIconoSeleccionado);
        this.iconSeleccionado(idIconoSeleccionado);
    }

    _createClass(IconsGallitoPerfil, [{
        key: "hoverCirculos",
        value: function hoverCirculos(idIconoSeleccionado) {

            var copia = idIconoSeleccionado;
            $(".contenedor-icon-img-fallitoPerfil").hover(function () {
                $(this).find(".circle-sup").addClass("bg-blueLight");
                $(this).find(".circle-interno").addClass("bg-blueLight");
                $(this).find(".circle-text").addClass("color-blueLight");
            }, function (idIconoSeleccionado) {
                var idHover = $(this).attr("id");
                if (idHover != copia) {
                    $(this).find(".circle-sup ").removeClass("bg-blueLight");
                    $(this).find(".circle-interno").removeClass("bg-blueLight");
                    $(this).find(".circle-text").removeClass("color-blueLight");
                }
            });
            $(".contenedor-icon-img-fallitoPerfil").hover(function () {
                $(this).find(".icon-translate").addClass("transalate-icon-efect");
                $(this).find(".check-icon-view").addClass("transalate-icon-check");
            }, function () {
                $(this).find(".icon-translate").removeClass("transalate-icon-efect");
                $(this).find(".check-icon-view").removeClass("transalate-icon-check");
            });
        }
    }, {
        key: "iconSeleccionado",
        value: function iconSeleccionado(idIconoSeleccionado) {
            $("#" + idIconoSeleccionado).find(".circle-sup").addClass("bg-blueLight");
            $("#" + idIconoSeleccionado).find(".circle-interno").addClass("bg-blueLight");
            $("#" + idIconoSeleccionado).find(".circle-text").addClass("color-blueLight");
            $("#" + idIconoSeleccionado).find(".icon-translate").addClass("transalate-icon-efect");
            $("#" + idIconoSeleccionado).find(".check-icon-view").addClass("transalate-icon-check");
        }
    }]);

    return IconsGallitoPerfil;
}();

var FiltroGallito = function () {
    function FiltroGallito(idMenuSeleccionado) {
        _classCallCheck(this, FiltroGallito);

        $(".block-desplegable-rectangle").addClass("bg-blue");
        $("#" + idMenuSeleccionado).removeClass("bg-blue");
        $(".contenedor-desplegado").addClass("hideDiv");
        $("#" + idMenuSeleccionado).siblings(".contenedor-desplegado ").slideToggle("fast");
        $(".block-desplegable-rectangle").on("click", this.desplegarFiltro);
    }

    _createClass(FiltroGallito, [{
        key: "desplegarFiltro",
        value: function desplegarFiltro() {
            $(this).siblings(".contenedor-desplegado").slideToggle("fast");
            if ($(this).find(".icon-down-filter").hasClass("hideDiv")) {
                $(this).find(".icon-down-filter").removeClass("hideDiv");
                $(this).find(".icon-up-filter").addClass("hideDiv");
            } else {
                $(this).find(".icon-up-filter").removeClass("hideDiv");
                $(this).find(".icon-down-filter").addClass("hideDiv");
            }
        }
    }]);

    return FiltroGallito;
}();