

class FormularioGallito{
    constructor()
    {
    	this.iniciarValidate();
    	$("#btn-guardarDatos-finta").on("click",this.simularSubmit)
    }
    simularSubmit()
    {
    	$(".formulario-gallito-slider").submit();
    }

    iniciarValidate()
    {

    	$(".formulario-gallito-slider").validate({
        rules:{
                nombre_actual_contrasenia:{
                    required:true
                },
                name_nueva_contra:
                {
                	required:true	
                },
                name_repetir_contra:
                {
                	required:true,
                	equalTo:"#id_nueva_contra"
                }
               
              
            },
            messages: {
                  
             },highlight: function (element) {
             	var bandera=$(element).hasClass("validate-2-select")
           		if(bandera)
           		{
           			$(element).siblings(".cont-module-error").find(".icon-alert").removeClass("hideDiv")
               		$(element).addClass('error-validacion');
           		}
           		else
           		{
           			$(element).parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv")
               		$(element).addClass('error-validacion');
               	}
           
           },
           unhighlight: function (element) {
               $(element).removeClass('error-validacion');
               var bandera=$(element).hasClass("validate-2-select")
           		if(bandera)
           		{
           			$(element).siblings(".cont-module-error").find(".icon-alert").addClass("hideDiv");
               		$(element).siblings(".cont-module-error").find(".icon-alert").addClass("hideDiv");
           		}
           		else
           		{
           			$(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
               		$(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
           		}
               
             

           },
           errorPlacement: function(error, element) {
           		var bandera=$(element).hasClass("validate-2-select")
           		if(bandera)
           		{
           			error.appendTo( element.siblings(".cont-module-error").find(".error-format"));
               		element.siblings(".cont-module-error").find(".icon-alert").removeClass("hideDiv")
           		}
           		else
           		{
           			error.appendTo( element.parent().parent().find(".cont-module-error").find(".error-format"));
               		element.parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv")
           		}
           		
           			
           }
           
           
    	});
    }
}
