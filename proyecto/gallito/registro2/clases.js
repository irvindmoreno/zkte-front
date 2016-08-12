class FormularioContador{
    constructor()
    {   this.validacion()
        $("#descripcionaviso").on("keyup",this.contadorPalabras)
    }
    validacion (){
        $("#form-aviso-impreso").validate({
            rules:{
                descripcionaviso:{
                    required:true,
                },
            },
        });
    }
    contadorPalabras(){
        // capturando el valor maximo
        var cantidadmaxima=parseInt($("#max-palabras").html());
        //capturando el contenido del textarea
        var descripcion=$("#descripcionaviso").val();
        
        var palabras_descripcion = descripcion.split(" ");
        var palabras_dobles=0;
        for (var i = 0; i<palabras_descripcion.length; i++) {
            var letrasxpalabra=palabras_descripcion[i].length;
            if(letrasxpalabra>12){
                palabras_dobles=palabras_dobles+parseInt(letrasxpalabra/12);
                
            }
        }

        var cantidad_palabras=palabras_descripcion.length;
        var palabras_restantes=cantidadmaxima-cantidad_palabras-palabras_dobles;
        if(palabras_restantes>=0){
            $("#descripcionaviso").attr("maxlength","");
            $("#numero-palabras").html(palabras_restantes);
            $("#resultado-aviso-impreso").html(descripcion);
            
        }else{
            var cantidad_caracteres=descripcion.length;
            $("#descripcionaviso").attr("maxlength",cantidad_caracteres);
            return false;
        }
        
    }
}
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

