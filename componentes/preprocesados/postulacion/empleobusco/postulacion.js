class PostulacionEmpleobusco{
    constructor()
    {
    	$(".content-table-cell").hover(
    		function() 
    		{
			    //$(this).find(".content-table-cell").addClass("noHidden");
			    //$(this).find(".content-table-cell-interno").addClass("noHidden");
			    $(this).find(".img-empresa").addClass("translateImgEmpresa");
			    

			}, 
			function() 
			{
			    //$(this).find(".content-table-cell").removeClass("noHidden");
			    //$(this).find(".content-table-cell-interno").removeClass("noHidden");
			    $(this).find(".img-empresa").removeClass("translateImgEmpresa");
			}
    	)
    }

}
var obj = new PostulacionEmpleobusco ();
