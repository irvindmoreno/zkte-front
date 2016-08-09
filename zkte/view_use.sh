usarVista()
{
	nombreDeLaVista=$1
	nombreDelProyecto=$2

	# verificaremos si el archivo Vista_use.conf existe
		rutaConfigVistasUse="$(pwd)/config/vista_use.conf"
		if [ -f $rutaConfigVistasUse ];
			then
				#modifico la vista en uso en el archivo Use.conf
				sed -i "1,2d" $rutaConfigVistasUse													
				echo "$nombreDeLaVista" >>$rutaConfigVistasUse
		else
			#como no esxiste el archivo use.conf, lo creo y guardo la vista que estara en uso
			touch $rutaConfigVistasUse
			echo "$nombreDeLaVista" >>$rutaConfigVistasUse
		fi
		#read rutaProyecto < $rutaConfigRutasProyecto
		read proyectoNombre<"$(pwd)/config/proyecto_use.conf"
		#echo $rutaProyecto			
		sed -i "1,4d" gulpfile.js
		sed -i "1i var tipo='proyecto';" gulpfile.js
		sed -i "1i var vista='$nombreDeLaVista';" gulpfile.js
		sed -i "1i var proyecto='$proyectoNombre';" gulpfile.js
		sed -i "1i /******no tocar linea 1,2 y 3********/" gulpfile.js
		echo "Se ah cambiado a la vista con éxito"
		google-chrome "http://localhost:8080/public/proyecto/$proyectoNombre/$nombreDeLaVista/$nombreDeLaVista.html"
		gulp	





	
}
usarVista $2 $1