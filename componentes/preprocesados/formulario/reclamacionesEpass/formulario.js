class FormularioReclamacionesEpass{
	constructor()
	{
		this.banderaPersona=true;
		$(".radioSelectedCliente").on("change",this.cambiarDeCliente)
	}
	cambiarDeCliente()
	{
		
			var radio=$(this).val();
			if(radio=="radioPersonaNatural")
			{
				$(".formularioPersonaNaturalAOcultar").css("display","block");
				$(".formularioEmpresa").css("display","none");
			}
			else if("radioEmpresa")
			{
				$(".formularioPersonaNaturalAOcultar").css("display","none");
				$(".formularioEmpresa").css("display","block");
			}
	}
}
$(document).on("ready",inicio)
function inicio()
{
	var obj = new FormularioReclamacionesEpass();
}
