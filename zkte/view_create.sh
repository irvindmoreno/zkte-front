VistaLLenarJade()
{
	#escribimos el head
		echo "extends ../layout/layout.jade
block head
	link(href='./$vista.css' rel='stylesheet')
block header
block navegacion	
block contenido	
block footer
block script
	script(src='./clases.js')
	script(src='./$vista.js')" >> $vista.jade
}
VistaLLenarStyle()
{
echo "rutaComponentes='../../../componentes'
rutaImagenes='../../../imagenes'


/************Layout****************/
@import('../layout/layout.styl')
/************Layout****************/">> $vista.styl
			
}
VistaLLenarJs()
{
	#rut.zkte.front
	#rutaConfigProyectoNombre="$(pwd)"/config/Proyecto/Nombre.conf
	##echo "mi vista es: $rutaConfigProyectoNombre"
	#if [ -f $rutaConfigProyectoNombre ];
	#	then
	#		cd $rutaVista
	#		read nombreProyecto < $rutaConfigProyectoNombre
	#		#echo "mi proyecto es: $nombreProyecto"
	#else
	#	echo "No existe la vista"
	#fi
echo '$(document).on("ready",inicio)
function inicio()
{	
}// ESTA SIEMPRE DEBE SER LA ULTIMA LINEA DEL ARCHVO DE LO CONTRARI DARA ERROR'>> $vista.js
}
crearVista()
{	
	rutaZkte="$(pwd)"

	#rutaConfigRutasProyecto="$(pwd)/config/Rutas/Proyecto.conf"
	#read rutaProyecto < $rutaConfigRutasProyecto

	#rutaConfigRutas="$(pwd)/config/Rutas"
	#rutaConfigVistas="$(pwd)/config/Vistas"

	#$vista es el parametro enviado vista

	
	rutaVista="proyecto/$proyecto/$vista"		
	#creamos la carpeta de la vista
	mkdir $rutaVista
	if [ -d $rutaVista ];
		then						
			#nos ubicamos en la carpeta de la vista	
				cd $rutaVista
			#creamos los 3  archivos de la vista
				touch $vista".jade"
					touch $vista".styl"
					touch $vista".js"
					touch "clases.js"
			#llenamos los archivos de la vista
				VistaLLenarStyle
				VistaLLenarJade
				VistaLLenarJs
			#copiaremos el nombre de la vista al archiv conf
				echo "$vista" >>"config/proyecto/$nombreDelProyecto/Vistas/vistas.conf"
					else
						echo "!! No se pudo crear la vista"
					fi
				#nos ubicamos en la ruta de donde estuvo al inicio
					#cd $rutaInicial	
			echo "Vista $vista creada correctamente"
	
	
}
validarSiEsPosibleEjecutarEsteComando()
{
	proyecto=$1
	vista=$2
	echo $proyecto " y " $vista
	rutaZkte="$(pwd)"

	configProyectoNombre="$(pwd)/config/proyecto/$proyecto/Nombre/Proyecto.conf"
	#echo $configProyectoNombre
	if [ -f $rutaZkte/config/proyecto_use.conf ];
		then
			if [ -d $rutaZkte/proyecto/$proyecto ];
				then
					if [ -d $rutaZkte/proyecto/$proyecto/$vista ];
						then
							echo "ya existe una vista llamada $vista en el proyecto $proyecto"
						else
							crearVista $proyecto $vista
					fi
				else
				echo "No existe el proyecto $proyecto"
			fi			
		else
			echo "Error 02: Usted no ah creado un proyecto, cree el proyecto primero por favor"
	fi

}
validarSiEsPosibleEjecutarEsteComando $1 $2
