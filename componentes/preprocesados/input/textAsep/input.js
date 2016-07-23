class InputTextAsep{
	constructor(boton,input)
	{
		this.input=input;
		this.boton=boton;
		this.comprobarInput()		
	}
	comprobarInput()
	{
		if(this.input=="EmailValidar")
		{
			$(".EmailValidar").on("keyup",{input: this.input},this.validarEmail)
			$("."+this.boton).on("click",{input: this.input},this.validarEmail)
		}
		else if(this.input=="NombreValidar")
		{
			$(".NombreValidar").on("keyup",{input: this.input},this.validarNombre)
			$("."+this.boton).on("click",{input: this.input},this.validarNombre)
		}
		else if(this.input=="ApellidoValidar")
		{
			$(".ApellidoValidar").on("keyup",{input: this.input},this.validarNombre)
			$("."+this.boton).on("click",{input: this.input},this.validarNombre)
		}
		else if(this.input=="ContraseniaValidar")
		{
			$(".ContraseniaValidar").on("keyup",{input: this.input},this.validarContrasenia)
			$("."+this.boton).on("click",{input: this.input},this.validarContrasenia)
		}
		else if(this.input=="DniValidar")
		{
			$(".DniValidar").on("keyup",{input: this.input},this.validarDNI)
			$("."+this.boton).on("click",{input: this.input},this.validarDNI)
		}
		else if(this.input=="RucValidar")
		{
			$(".RucValidar").on("keyup",{input: this.input},this.validarRUC)
			$("."+this.boton).on("click",{input: this.input},this.validarRUC)
		}
		else if(this.input=="TelefonoValidar")
		{
			$(".TelefonoValidar").on("keyup",{input: this.input},this.validarTelefono)
			$("."+this.boton).on("click",{input: this.input},this.validarTelefono)
		}
	}
	validarTelefono(event)
	{
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length
		if(tamanioInput==12)
		{
			var expresion=$('.'+input).val().match(/^[0-9]+$/) 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")	
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();	
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}
	}
	validarRUC(event)
	{		
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length

		if(tamanioInput==11)
		{
			var expresion=$('.'+input).val().match(/^[0-9]+$/) 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {	 
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}
	}
	validarDNI(event)
	{
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length
		console.log(tamanioInput);
		if(tamanioInput==8)
		{
			var expresion=$('.'+input).val().match(/^[0-9]+$/) 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {	 
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}
	}
	validarContrasenia(event)
	{
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length

		if(tamanioInput>0 && tamanioInput <9)
		{
			var expresion=$('.'+input).val().match(/^[a-z0-9\sáéíóúñ.,_\-\&\/]+$/i) 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {	
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}
	}
	validarEmail(event)
	{
		var input=event.data.input
		var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
 		var expresionaEvaluar=regex.test($('.'+input).val().trim())
	    //Se utiliza la funcion test() nativa de JavaScript
	    if (expresionaEvaluar) 
	    {
	    	$(this).css("border","1px solid #808080")
	    	$('.'+input).siblings('span').removeClass("inputValido")
	        $('.'+input).siblings('span').addClass("InputInvalidado")
	    }
	    else 
	    {	
	    	event.preventDefault();
	    	$(this).css("border","2px solid #2ca7df")
	    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")     
	    }
	}
	validarNombre(event)
	{
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length
		if(tamanioInput>0 && tamanioInput <110)
		{
			var expresion=$('.'+input).val().match('^[a-zA-Z_áéíóúñ\s]*$') 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}		
	}
}
//var inputTextAsep = new InputTextAsep("btn-submit","DniValidar");
//var inputTextAsep = new InputTextAsep("btn-submit","RucValidar");
/*
var inputTextAsep = new InputTextAsep("btn-submit","EmailValidar");
//var inputTextAsep = new InputTextAsep("btn-submit","TelefonoValidar");

var inputTextAsep = new InputTextAsep("btn-submit","EmailValidar");
var inputTextAsep = new InputTextAsep("btn-submit","NombreValidar");
var inputTextAsep = new InputTextAsep("btn-submit","ApellidoValidar");
var inputTextAsep = new InputTextAsep("btn-submit","ContraseniaValidar");
var inputTextAsep = new InputTextAsep("btn-submit","DniValidar");
var inputTextAsep = new InputTextAsep("btn-submit","TelefonoValidar");*/



