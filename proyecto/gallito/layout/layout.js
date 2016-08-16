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