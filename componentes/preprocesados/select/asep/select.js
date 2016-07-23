class SelectAsep{
	constructor(boton,idSelect,required)
	{		
		this.idSelect=idSelect;
		$('.'+this.idSelect).on("change",{idSelect: this.idSelect},this.validarSelect)
		if(required)
		{
			$("."+boton).on("click",{idSelect: this.idSelect},this.validarSelect)
		}
	}
	validarSelect(event)
	{		
		var idSelect=event.data.idSelect
		var optionInicial=$("."+idSelect).children('option').val()
		var optionSeleccionado=$("."+idSelect).val()	
		if(optionInicial==optionSeleccionado)
		{
			event.preventDefault();			
	        $('.'+idSelect).siblings('span').removeClass("InputInvalidado")
	        $('.'+idSelect).siblings('span').addClass("inputValido") 
		}
		else
		{
			$('.'+idSelect).siblings('span').removeClass("inputValido")
	        $('.'+idSelect).siblings('span').addClass("InputInvalidado");
		}
	}
}
//var selectAsep=new SelectAsep("btn","idSelect",true)
