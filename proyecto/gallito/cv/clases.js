$.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0}');
var nroDeSlider=1;
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
                nombre_imagen_cv:{
                    required:true
                },
                image: {
                    required: true,
                    extension: "jpg,jpeg",
                    filesize: 5,
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