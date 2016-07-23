//se crean estas varables porque con metodos como el onclick no funciona el this
var colorDesactivadoNumero;
var colorDesactivadoTitulo;
var colorDesactivadaLetraContenido;
var colorAcitvadoNumero;
var colorAcitvadoTitulo;
var colorAcitvadoLetraContenido;
class TabsAsep{
	constructor()
	{//$(".pestaniasPadre").children("div:nth-child(3)")
		//ocultando las pestañas(divs)
		$(".pestaniasPadre").children("div").css("display","none")
		//dejar por defecto el primero abierto
		$(".pestaniasPadre").children("div:nth-child(1)").css("display","block")
		//llamar a la funcion q muestra el div		
		$(".TabsAsepMovil-Pestania").on("click",this.mostrarDiv)
		//instanciando colores del item seleccionado por defecto cuando esta seleccionado
			this.backgroundSeleccionadoCirculo="#2ca7df";
			this.colorSeleccionadoTitulo="#2ca7df";
			this.colorContenidoSeleccionado="#303030";
			this.backgrounPestaniaSeleccionado="#dee0e2";
			colorAcitvadoNumero=this.backgroundSeleccionadoCirculo;
			colorAcitvadoTitulo=this.colorSeleccionadoTitulo;
			colorAcitvadoLetraContenido=this.colorContenidoSeleccionado
		//instanciando colores del item desactivado por defecto cuando esta seleccionado
			this.backgroundNumeroPestaniaDesactivada="#5D5C5C"
			this.backgroundTituloPestaniaDesactivada="#5D5C5C"
			this.colorContenidoPestaniaDesactivada="#777777"
			colorDesactivadoNumero=this.backgroundNumeroPestaniaDesactivada;
			colorDesactivadoTitulo=this.backgroundTituloPestaniaDesactivada;
			colorDesactivadaLetraContenido=this.colorContenidoPestaniaDesactivada;
		//estos son los css de la pestaña seleccionada por defecto de desktop
		$(".TabsAsep-Pestania-Ttulo-Numero:first").css("background",this.backgroundSeleccionadoCirculo)
		$(".TabsAsep-Pestania-Ttulo-Texto:first").css("color",this.colorSeleccionadoTitulo)
		$(".TabsAsep-Pestania-Contenido:first").css("color",this.colorContenidoSeleccionado)
		$(".TabsAsep-Pestania:first").css("background",this.backgrounPestaniaSeleccionado)
		// estos son los controles para movil
		$(".TabsAsepMovil-Pestania-Numero:first").css("background",this.backgroundSeleccionadoCirculo)
		$(".TabsAsepMovil-Pestania-Ttulo:first").css("color",this.colorSeleccionadoTitulo)
		$(".TabsAsepMovil-Pestania:first").css("background",this.backgrounPestaniaSeleccionado)

		$(".TabsAsep-Pestania").on("click",this.mostrarDiv)		
	}
	mostrarDiv(color)
	{
		var pestania =parseInt($(this).attr("data"));
		// esto es para desktop
			$(".TabsAsep-Pestania").addClass("desactivarTab")
			$(".TabsAsep-Pestania").removeClass("activarTab")
			$(this).removeClass("desactivarTab")
			$(this).addClass("activarTab")
			//vamos a pintar a los desactivados
				//para pc
				$(".desactivarTab .TabsAsep-Pestania-Ttulo-Numero").css("background",colorDesactivadoNumero)
				$(".desactivarTab .TabsAsep-Pestania-Ttulo-Texto").css("color",colorDesactivadoTitulo)
				$(".desactivarTab .TabsAsep-Pestania-Contenido").css("color",colorDesactivadaLetraContenido)
							
			//Pintemos al activado
				// para pc
				$(".activarTab .TabsAsep-Pestania-Ttulo-Numero").css("background",colorAcitvadoNumero)
				$(".activarTab .TabsAsep-Pestania-Ttulo-Texto").css("color",colorAcitvadoTitulo)
				$(".activarTab .TabsAsep-Pestania-Contenido").css("color",colorAcitvadoLetraContenido)
							
		// esto es para movil
			$(".TabsAsepMovil-Pestania").addClass("desactivarTab")
			$(".TabsAsepMovil-Pestania").removeClass("activarTab")
			$(this).removeClass("desactivarTab")
			$(this).addClass("activarTab")
			//vamos a pintar a los desactivados
				$(".desactivarTab .TabsAsepMovil-Pestania-Numero").css("background",colorDesactivadoNumero)
				$(".desactivarTab .TabsAsepMovil-Pestania-Titulo").css("color",colorDesactivadoTitulo)
			//Pintemos al activado
				$(".activarTab .TabsAsepMovil-Pestania-Numero").css("background",colorAcitvadoNumero)
				$(".activarTab .TabsAsepMovil-Pestania-Titulo").css("color",colorAcitvadoTitulo)
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
var tabsAsep= new TabsAsep()