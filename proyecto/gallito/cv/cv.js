$(document).on("ready",inicio)
function obtenerNombreImagen()
{
	var nombreImagen=$(this).val();
	$("#id_nombre_imagen_cv").val(nombreImagen)
	$("#id_nombre_imagen_cv").change()
}
function inicio()
{	$("#id_nombre_imagen_cv").attr("readonly",true)
	$("#archivo").on("change",obtenerNombreImagen)
	var filtroGallito= new FiltroGallito("id_mi_curriculum")
    var iconsGallitoPerfil= new IconsGallitoPerfil("id_circle_cv")
    var formularioGallito= new FormularioGallito()
}// ESTA SIEMPRE DEBE SER LA ULTIMA LINEA DEL ARCHVO DE LO CONTRARI DARA ERROR
