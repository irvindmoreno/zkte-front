eliminarConfiguracionProyectoNombre()
{
	if [ -f "$(pwd)/config/Proyecto/Nombre.conf" ];
		then
			sudo rm -R "$(pwd)/config/Proyecto/Nombre.conf"
			echo "."
	else
		echo "."
	fi
}
eliminarConfiguracionRutaProyecto()
{
	if [ -f "$(pwd)/config/Rutas/Proyecto.conf" ];
		then
			sudo rm -R "$(pwd)/config/Rutas/Proyecto.conf"
			echo ".."
	else
		echo ".."
	fi
}
eliminarConfiguracionRutaRuta()
{
	if [ -f "$(pwd)/config/Rutas/Rutas.conf" ];
		then
			sudo rm -R "$(pwd)/config/Rutas/Rutas.conf"
			echo "..."
	else
		echo "..."
	fi
}
eliminarConfiguracionVistasVistas()
{
	if [ -f "$(pwd)/config/Vistas/Vistas.conf" ];
		then
			sudo rm -R "$(pwd)/config/Vistas/Vistas.conf"
			echo "...."
	else
		echo "...."
	fi
}
eliminarConfiguracionVistasUse()
{
	if [ -f "$(pwd)/config/Vistas/Use.conf" ];
		then
			sudo rm -R "$(pwd)/config/Vistas/Use.conf"
			echo "....."
	else
		echo "....."
	fi
}
eliminarConfig()
{
	rutaZkte=$(pwd)	
	if [ -d "$(pwd)/config/proyecto/$nombreProyecto" ];
		then
			cd "$(pwd)/config/proyecto"			
			sudo rm -R $nombreProyecto
			echo "....."
	else
		echo "....."
	fi
	cd $rutaZkte
}
eliminarCarpetaProyecto()
{
	nombreProyecto=$1
	if [ -d "$(pwd)"/proyecto/$nombreProyecto ];
		then
			sudo rm -R "$(pwd)"/proyecto/$nombreProyecto
			eliminarConfig
			#eliminarConfiguracionProyectoNombre
			#eliminarConfiguracionRutaProyecto
			#eliminarConfiguracionRutaRuta
			#eliminarConfiguracionVistasVistas
			#eliminarConfiguracionVistasUse
			echo "Se ah eliminado el proyecto $1 correctamente"
	else
		echo "no existe este proyecto"
	fi
	#sudo rm -R "$(pwd)"/proyecto/$proyectoNombre
}
eliminarProyecto()
{
	eliminarCarpetaProyecto $1	
}
eliminarProyecto $1
