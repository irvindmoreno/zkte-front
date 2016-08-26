$(document).on("ready",inicio)
function seguridadContra()
{
	var cantidadCaracteres=$("#id_nueva_contra").val().length;
	if(cantidadCaracteres==0)
	{
		$(".texto-security").html("Nivel de seguridad")
		$("#seguridad_corta").removeClass("bg_pw_corta")
		$("#seguridad_corta").removeClass("bg_pw_debil")
		$("#seguridad_corta").removeClass("bg_pw_fuerte")
		$("#seguridad_corta").removeClass("bg_pw_muy_fuerte")

		$("#seguridad_debil").removeClass("bg_pw_corta")
		$("#seguridad_debil").removeClass("bg_pw_debil")
		$("#seguridad_debil").removeClass("bg_pw_fuerte")
		$("#seguridad_debil").removeClass("bg_pw_muy_fuerte")

		$("#seguridad_fuerte").removeClass("bg_pw_corta")
		$("#seguridad_fuerte").removeClass("bg_pw_debil")
		$("#seguridad_fuerte").removeClass("bg_pw_fuerte")
		$("#seguridad_fuerte").removeClass("bg_pw_muy_fuerte")

		$("#seguridad_muy_fuerte").removeClass("bg_pw_corta")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_debil")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_fuerte")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_muy_fuerte")
	}
	if(cantidadCaracteres<6 && cantidadCaracteres>0)
	{
		$(".texto-security").html("Demasiado corta")
		$("#seguridad_corta").addClass("bg_pw_corta")
		$("#seguridad_corta").removeClass("bg_pw_debil")
		$("#seguridad_corta").removeClass("bg_pw_fuerte")
		$("#seguridad_corta").removeClass("bg_pw_muy_fuerte")
		$("#seguridad_debil").removeClass("bg_pw_debil")
		$("#seguridad_debil").removeClass("bg_pw_fuerte")
		$("#seguridad_debil").removeClass("bg_pw_muy_fuerte")
		$("#seguridad_fuerte").removeClass("bg_pw_corta")
		$("#seguridad_fuerte").removeClass("bg_pw_fuerte")
		$("#seguridad_fuerte").removeClass("bg_pw_muy_fuerte")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_corta")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_fuerte")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_muy_fuerte")
	}
	else if(cantidadCaracteres<12 && cantidadCaracteres>5)
	{
		$(".texto-security").html("Debil")
		$("#seguridad_corta").addClass("bg_pw_debil")
		$("#seguridad_debil").addClass("bg_pw_debil")

		$("#seguridad_corta").removeClass("bg_pw_corta")
		$("#seguridad_corta").removeClass("bg_pw_fuerte")
		$("#seguridad_corta").removeClass("bg_pw_muy_fuerte")
		$("#seguridad_debil").removeClass("bg_pw_corta")
		$("#seguridad_debil").removeClass("bg_pw_fuerte")
		$("#seguridad_debil").removeClass("bg_pw_muy_fuerte")
		$("#seguridad_fuerte").removeClass("bg_pw_corta")
		$("#seguridad_fuerte").removeClass("bg_pw_fuerte")
		$("#seguridad_fuerte").removeClass("bg_pw_muy_fuerte")
	}
	else if(cantidadCaracteres<20 && cantidadCaracteres>11)
	{
		$(".texto-security").html("Nada mal")
		$("#seguridad_corta").addClass("bg_pw_fuerte")
		$("#seguridad_debil").addClass("bg_pw_fuerte")
		$("#seguridad_fuerte").addClass("bg_pw_fuerte")
		$("#seguridad_corta").removeClass("bg_pw_corta")
		$("#seguridad_corta").removeClass("bg_pw_debil")
		$("#seguridad_corta").removeClass("bg_pw_muy_fuerte")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_corta")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_debil")
		$("#seguridad_muy_fuerte").removeClass("bg_pw_muy_fuerte")
		$("#seguridad_debil").removeClass("bg_pw_corta")
		$("#seguridad_debil").removeClass("bg_pw_debil")
		$("#seguridad_debil").removeClass("bg_pw_muy_fuerte")
		$("#seguridad_fuerte").removeClass("bg_pw_corta")
		$("#seguridad_fuerte").removeClass("bg_pw_debil")
		$("#seguridad_fuerte").removeClass("bg_pw_muy_fuerte")

	}
	else if(cantidadCaracteres<32 && cantidadCaracteres>19)
	{
		$(".texto-security").html("Excelente")
		$("#seguridad_corta").addClass("bg_pw_muy_fuerte")
		$("#seguridad_debil").addClass("bg_pw_muy_fuerte")
		$("#seguridad_fuerte").addClass("bg_pw_muy_fuerte")
		$("#seguridad_muy_fuerte").addClass("bg_pw_muy_fuerte")
		$("#seguridad_corta").removeClass("bg_pw_corta")
		$("#seguridad_corta").removeClass("bg_pw_debil")
		$("#seguridad_corta").removeClass("bg_pw_fuerte")
	}
}
function inicio()
{
	$("#id_nueva_contra").on("keyup",seguridadContra);
	var filtroGallito= new FiltroGallito("id_mi_perfil")
    var iconsGallitoPerfil= new IconsGallitoPerfil("id_circle_referencias")
    var formularioGallito= new FormularioGallito()
}// ESTA SIEMPRE DEBE SER LA ULTIMA LINEA DEL ARCHVO DE LO CONTRARI DARA ERROR
