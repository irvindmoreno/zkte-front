"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FiltroGallito = function () {
    function FiltroGallito() {
        _classCallCheck(this, FiltroGallito);

        $(".block-desplegable-rectangle").on("click", this.desplegarFiltro);
    }

    _createClass(FiltroGallito, [{
        key: "desplegarFiltro",
        value: function desplegarFiltro() {
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
    }]);

    return FiltroGallito;
}();

var obj = new FiltroGallito();