class IconsGallitoPerfil{
    constructor()
    {
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

}
var obj = new IconsGallitoPerfil ();
