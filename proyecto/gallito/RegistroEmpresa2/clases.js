jQuery.validator.addMethod("emailPersonalizado", function(value, element) {
  return this.optional(element) || /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i.test(value);
}, "Ingrese un correo válido");
jQuery.validator.addMethod("telefono", function(value, element) {
  return this.optional(element) || /^[0-9()#-*-]+([0-9()#-*-]+)*$/i.test(value);
}, "Ingrese telefono válido");
var colorDesactivadoNumero;
var colorDesactivadoTitulo;
var colorDesactivadaLetraContenido;
var colorAcitvadoNumero;
var colorAcitvadoTitulo;
var colorAcitvadoLetraContenido;
class TabsGallito{
    constructor()
    {
		$(".pestaniasPadre").children("div").css("display","none")
		$(".pestaniasPadre").children("div:nth-child(1)").css("display","block");
    }
    mostrarDiv(color)
	{
		var pestania =parseInt($(this).attr("data"));
		$(".pestaniasPadre").children("div").css("display","none")
		$(".pestaniasPadre").children("div:nth-child("+pestania+")").css("display","block")
	}
	setBackgroundSeleccionadoCirculo(background)
	{
		this.backgroundSeleccionadoCirculo=background;
	}
	setColorSeleccionadoTitulo(color)
	{
		this.colorSeleccionadoTitulo=color;
	}
	setColorContenidoSeleccionado(color)
	{
		this.colorContenidoSeleccionado=color;
	}
	setBackgroundPestaniaSeleccionado(background)
	{
		this.backgrounPestaniaSeleccionado=background;
	}
	setBackgroundNumeroPestaniaDesactivada(background)
	{
		this.backgroundNumeroPestaniaDesactivada=background;
	}
	setBackgroundTituloPestaniaDesactivada(background)
	{
		this.backgroundTituloPestaniaDesactivada=background;
	}
	setColorContenidoPestaniaDesactivada(background)
	{
		this.colorContenidoPestaniaDesactivada=background;
	}

}


class FormularioGallitoRegistro{
    constructor()
    {
    	this.iniciarValidate();
    	$("#btn-guardarDatos-finta").on("click",this.simularSubmit);

    }



    iniciarValidate()
    {

    	$("#formulario-registro-1").validate({
        rules:{
                name_nombre:{
                    required:true,
                    maxlength:100
                },
                name_Apellidos:
                {
                    required:true,
                    maxlength:100
                },
                name_Cargo:
                {
                    required:true,
                },
                name_telefono:
                {
                    required:true,
                    telefono:true
                }
              
            },
            messages: {
                  
             }
           ,highlight: function (element) {
           		$(element).parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv")
               $(element).addClass('error-validacion');
           
           },
           unhighlight: function (element) {
               $(element).removeClass('error-validacion');

               $(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
               $(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
             

           },
           errorPlacement: function(error, element) {
           		error.appendTo( element.parent().parent().find(".cont-module-error").find(".error-format"));
               	element.parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv")
           			
           }
    	});
    }

}