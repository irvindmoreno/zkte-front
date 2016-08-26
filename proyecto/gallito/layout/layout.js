class IconsGallitoPerfil{
    constructor(idIconoSeleccionado)
    {
        this.hoverCirculos(idIconoSeleccionado);
        this.iconSeleccionado(idIconoSeleccionado);
        
    }
    hoverCirculos(idIconoSeleccionado)
    {

        var copia=idIconoSeleccionado
        $( ".contenedor-icon-img-fallitoPerfil" ).hover(
          function() {
            $( this ).find(".circle-sup").addClass("bg-blueLight");
            $( this ).find(".circle-interno").addClass("bg-blueLight");
            $( this ).find(".circle-text").addClass("color-blueLight");
          }, function(idIconoSeleccionado) {
                var idHover=$(this).attr("id");
                if(idHover!=copia)
                {
                    $( this ).find(".circle-sup ").removeClass("bg-blueLight");
                    $( this ).find(".circle-interno").removeClass("bg-blueLight");
                    $( this ).find(".circle-text").removeClass("color-blueLight");
                }
            
          }
        );
        $(".contenedor-icon-img-fallitoPerfil").hover(
            function() 
            {
                $(this).find(".icon-translate").addClass("transalate-icon-efect");
                $(this).find(".check-icon-view").addClass("transalate-icon-check");
                
            }, 
            function() 
            {
                $(this).find(".icon-translate").removeClass("transalate-icon-efect");
                $(this).find(".check-icon-view").removeClass("transalate-icon-check");
            }
        );
    }
    iconSeleccionado(idIconoSeleccionado)
    {
        $("#"+idIconoSeleccionado).find(".circle-sup").addClass("bg-blueLight");
        $("#"+idIconoSeleccionado).find(".circle-interno").addClass("bg-blueLight");
        $("#"+idIconoSeleccionado).find(".circle-text").addClass("color-blueLight");
        $("#"+idIconoSeleccionado).find(".icon-translate").addClass("transalate-icon-efect");
        $("#"+idIconoSeleccionado).find(".check-icon-view").addClass("transalate-icon-check");
    }

}
class FiltroGallito{
    constructor(idMenuSeleccionado)
    {
        $(".block-desplegable-rectangle").addClass("bg-blue")
        $("#"+idMenuSeleccionado).removeClass("bg-blue");
        $(".contenedor-desplegado").addClass("hideDiv")
        $("#"+idMenuSeleccionado).siblings(".contenedor-desplegado ").slideToggle("fast");
    	$(".block-desplegable-rectangle").on("click",this.desplegarFiltro)
        
    }
    desplegarFiltro()
    {
    	$(this).siblings(".contenedor-desplegado").slideToggle("fast");
    	if($(this).find(".icon-down-filter").hasClass("hideDiv"))
    	{
    		$(this).find(".icon-down-filter").removeClass("hideDiv");
    		$(this).find(".icon-up-filter").addClass("hideDiv");
    		
    	}
    	else
    	{
    		$(this).find(".icon-up-filter").removeClass("hideDiv");
    		$(this).find(".icon-down-filter").addClass("hideDiv");    		
    	}
    	
    }
}