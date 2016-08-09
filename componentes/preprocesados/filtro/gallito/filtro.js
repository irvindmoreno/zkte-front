class FiltroGallito{
    constructor()
    {
    	$(".block-desplegable-rectangle").on("click",this.desplegarFiltro)
    }
    desplegarFiltro()
    {
    	$(this).siblings(".contenedor-desplegado").slideToggle("fast");
    	if($(this).find(".icon-down-filter").hasClass("hideDiv"))
    	{
    		$(this).addClass("bg-blue");
    		$(this).find(".icon-down-filter").removeClass("hideDiv");
    		$(this).find(".icon-up-filter").addClass("hideDiv");
    		
    	}
    	else
    	{
    		$(this).find(".icon-up-filter").removeClass("hideDiv");
    		$(this).find(".icon-down-filter").addClass("hideDiv");    		
    		$(this).removeClass("bg-blue");
    	}
    	
    }
}
var obj = new FiltroGallito ();
