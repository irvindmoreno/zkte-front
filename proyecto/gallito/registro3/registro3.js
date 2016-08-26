$(document).on("ready",inicio)
function inicio()
{	
	var formulario= new FormularioContador();
	$("#id_radio_boleta").on("click",function(){
		$("#contenido-comprobante").addClass("hideDiv")
	});
	$("#id_radio_factura").on("click",function(){
		$("#contenido-comprobante").removeClass("hideDiv")
	});
}// ESTA SIEMPRE DEBE SER LA ULTIMA LINEA DEL ARCHVO DE LO CONTRARI DARA ERROR
