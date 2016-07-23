class PositScorecard{
	constructor()
	{
		$(".posit-Epass-titulo-Flecha").on("click",this.ocultarPositEpass);
		$(".posit-Epass-Consulta-Oculta").on("click",this.mostrarPositEpass);
	}
	ocultarPositEpass()
	{
		$(".posit-Epass-Consulta-Oculta").css("display","inline-block")
		$(".posit-Epass-Consulta").css("display","none")	
	}
	mostrarPositEpass()
	{
		$(".posit-Epass-Consulta-Oculta").css("display","none")
		$(".posit-Epass-Consulta").css("display","block")
	}
}
$(document).on("ready",inicio)
function inicio()
{
	var obj = new PositScorecard();
}