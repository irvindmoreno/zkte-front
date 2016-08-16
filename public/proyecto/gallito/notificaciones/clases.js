"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderGallitoDashboard = function HeaderGallitoDashboard() {
    _classCallCheck(this, HeaderGallitoDashboard);
};

var obj = new HeaderGallitoDashboard();

var IconsGallitoPerfil = function IconsGallitoPerfil() {
    var _$$dataTable;

    _classCallCheck(this, IconsGallitoPerfil);

    $("#table_notificaciones").dataTable((_$$dataTable = {
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false
    }, _defineProperty(_$$dataTable, "bFilter", false), _defineProperty(_$$dataTable, "bInfo", false), _$$dataTable));
};

var FooterGallito = function FooterGallito() {
    _classCallCheck(this, FooterGallito);
};