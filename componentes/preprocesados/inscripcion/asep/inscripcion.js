class Inscripcion{
	constructor(etiqueta)
	{
		this.etiqueta=etiqueta;
		this.bandera=false
		$(this.etiqueta).on("click",this.mostrarFormulario)		
  	} 
  	mostrarFormulario()
	{
		this.bandera=!this.bandera;
		if(this.bandera)
		{
			$(".FechaConTituloContenido-Derecha-Formulario").css("height","9em")
		}
		else
		{
			$(".FechaConTituloContenido-Derecha-Formulario").css("height","0em")
		}		
	}

}
