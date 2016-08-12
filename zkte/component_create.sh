crearComponente()
{   
    rutaZkte="$(pwd)"
    rutaNuevoComponente=$rutaZkte"/componentes/preprocesados/$1/$2"
    nombreNuevoComponente=$2
    nombreNuevoComponenteArchivo=$1
    rutaConfigComponentes="$(pwd)/config/Componentes"

    cd $rutaNuevoComponente
    #crear los archvos del componente
                touch "layout.jade"
                touch $nombreNuevoComponenteArchivo".jade"
                touch $nombreNuevoComponenteArchivo".js"
                touch $nombreNuevoComponenteArchivo".styl"

            #llenar el archivo js nombreNuevoComponente
            echo "- rutaStatic ='../../../../static'
- rutaLib ='../../../../static/lib'
doctype html
html
    head
        meta(charset='utf-8')
        meta(name='viewport' content='width=device-width, user-scalable=no')
        block title
            title $nombreNuevoComponente-$nombreNuevoComponenteArchivo
        block link
            link(rel='stylesheet' href=rutaLib+'/bootstrap/bootstrap.min.css')
            link(rel='stylesheet' href=rutaLib+'/font-awesome/css/font-awesome.min.css')
            link(rel='stylesheet' type='text/css' href='./$nombreNuevoComponenteArchivo.css')
            link(rel='stylesheet' href=rutaStatic+'/imagenes/sprite/$componenteNombre/sprite.css')

    body
        block content
        block script
            script(src=rutaLib+'/jquery/jquery.min.js')
            script(src=rutaLib+'/bootstrap/bootstrap.min.js')
            script(src='./$nombreNuevoComponenteArchivo.js')">>layout.jade
            echo "//************** $nombreNuevoComponenteArchivo $nombreNuevoComponente **************//">> $nombreNuevoComponenteArchivo.jade
            echo "extends ./layout.jade
block content
    - rutaImagenes ='../../../imagenes'">> $nombreNuevoComponenteArchivo.jade
            echo "//************** $nombreNuevoComponenteArchivo $nombreNuevoComponente **************//">> $nombreNuevoComponenteArchivo.jade
            echo "//************** $nombreNuevoComponenteArchivo $nombreNuevoComponente **************//">> $nombreNuevoComponenteArchivo.styl
            echo "body
    margin 0
    font-size 16px">> $nombreNuevoComponenteArchivo.styl
            echo "//************** $nombreNuevoComponenteArchivo $nombreNuevoComponente **************//">> $nombreNuevoComponenteArchivo.styl
            echo "class $(echo $nombreNuevoComponenteArchivo | sed 's/^./\u&/')$(echo $nombreNuevoComponente | sed 's/^./\u&/'){
    constructor()
    {

    }

}
var obj = new $(echo $nombreNuevoComponenteArchivo | sed 's/^./\u&/')$(echo $nombreNuevoComponente | sed 's/^./\u&/') ();" >> $nombreNuevoComponenteArchivo".js"
    echo "Componente creado correctamente"
    
}
crearCarpetaComponenteTipo()
{
    
    if [ -d $rutaZkte"/componentes/preprocesados/$componenteTipo" ];
        then
            echo "."
    else
        mkdir $rutaZkte"/componentes/preprocesados/$componenteTipo"
    fi
}
crearCarpetaComponenteNombre()
{
    if [ -d $rutaZkte"/componentes/preprocesados/$componenteTipo/$componenteNombre" ];
        then
            echo ".."
    else
        mkdir $rutaZkte"/componentes/preprocesados/$componenteTipo/$componenteNombre"
    fi
}
validarSiComponenteExiste()
{

    rutaZkte="$(pwd)"
    #echo $rutaZkte
    componenteTipo=$1
    componenteNombre=$2
    rutaComponenteACrear=$rutaZkte"/componentes/preprocesados/$1/$2"
        if [ -d $rutaComponenteACrear ];
        then
            echo "ya existe un componente $componenteTipo : $componenteNombre"
        else
            #echo "chamaquina el samuel"
            crearCarpetaComponenteTipo
            crearCarpetaComponenteNombre                    
            crearComponente $componenteTipo $componenteNombre
        fi
}
validarSiComponenteExiste $1 $2
