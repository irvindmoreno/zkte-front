class NavegacionAsep{
	constructor ()
	{
		this.estadoMenuMovil=false;		
		$(".Boton-Movil i").on("click",this.mostrarMenuMovil);
  	} 
  	mostrarMenuMovil()
	{
		this.estadoMenuMovil=!this.estadoMenuMovil
		if(this.estadoMenuMovil)
		{
			$(".Navegacion-Menu-Movil").css("height","11em")
		}
		else
		{
			$(".Navegacion-Menu-Movil").css("height","0px")
		}
								
	}

}
var obj = new NavegacionAsep();