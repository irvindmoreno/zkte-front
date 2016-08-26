"use strict";

$(document).on("ready", inicio);
function inicio() {
   var headerGallitoDashboard = new HeaderGallitoDashboard();
   var filtroGallito = new FiltroGallito("id_mi_perfil");
   var iconsGallitoPerfil = new IconsGallitoPerfil("id_cicrle_experiencia");
   var formularioGallito = new FormularioGallito();
   var footerGallito = new FooterGallito();
} // ESTA SIEMPRE DEBE SER LA ULTIMA LINEA DEL ARCHVO DE LO CONTRARI DARA ERROR