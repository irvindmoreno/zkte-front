"use strict";

$(document).on("ready", inicio);
function inicio() {
   var filtroGallito = new FiltroGallito("id_mi_curriculum");
   var iconsGallitoPerfil = new IconsGallitoPerfil("id_circle_cv");
   var formularioGallito = new FormularioGallito();
} // ESTA SIEMPRE DEBE SER LA ULTIMA LINEA DEL ARCHVO DE LO CONTRARI DARA ERROR