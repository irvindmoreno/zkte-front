class PositEPass{
	constructor()
	{
		$(".posit-Epass-Footer").on("click",this.ocultarPositEpass);
		$(".posit-Epass-Consulta-Oculta").on("click",this.mostrarPositEpass);
	}
	ocultarPositEpass()
	{
		$(".posit-Epass-Consulta-Oculta").css("display","flex")
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
	var obj =new PositEPass();
}
