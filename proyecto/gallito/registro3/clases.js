class FormularioContador{
    constructor()
    {   this.validacion()
    }
    validacion (){
        $("#formulario-registro-3").validate({
            rules:{
                name_rut:{
                    required:true
                },
                name_razon_social:
                {
                    required:true
                },
                name_ci:
                {
                    required:true
                }
            },highlight: function (element) {
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