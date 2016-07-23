$(document).on("ready",inicio)
var componentes={}
var banderaPrimerClick=0;
function inicio()
{
    actualizarJsonComponente("header");
    pintarComponenteSeleccionado("header");
    $(".componenteClassLink").on("click",pintarComponenteSeleccionadoClick)
    $(".link-componente-iframe").on("click",pintarNombreComponente)
}
function pintarNombreComponente()
{
    $(".link-componente-iframe").removeClass("nombreComponenteSeleccionado");
    $(this).addClass("nombreComponenteSeleccionado");
}
function pintarComponenteSeleccionadoClick()
{
    $(".componenteClassLink").removeClass("componenteSeleccionado")
    $(this).addClass("componenteSeleccionado");
}
function pintarComponenteSeleccionado(componente)
{
    $("#"+componente).addClass("componenteSeleccionado")
}
function actualizarJsonComponente(componente)
{   
    switch(componente) {
        case "header":
            componentes={
                header:["gallito","todobusco","asep","clickslogic","ePass","zkte"]
            }
            mostrarComponentes()
            break;
        case "footer":
            componentes={
                footer:["gallito","todobusco","asep"]
            }
            mostrarComponentes()
            break;
        case "banner":
            componentes={
                banner:["todobusco"]
            }
            mostrarComponentes()
            break;
        case "button":
            componentes={
                button:["asepAzul"]
            }
            mostrarComponentes()
            break;
        case "contadores":
            componentes={
                contadores:["gallito"]
            }
            mostrarComponentes()
            break;
        case "formulario":
            componentes={
                formulario:["ePass","reclamacionesEpass"]
            }
            mostrarComponentes()
            break;
        case "gota":
            componentes={
                gota:["ePass"]
            }
            mostrarComponentes()
            break;
        case "grafico":
            componentes={
                grafico:["cliclogix"]
            }
            mostrarComponentes()
            break;
        case "icons":
            componentes={
                icons:["gallito","todobusco"]
            }
            mostrarComponentes()
            break;
        case "input":
            componentes={
                input:["asep","fileAsep","textAsep"]
            }
            mostrarComponentes()
            break;
        case "inscripcion":
            componentes={
                inscripcion:["asep"]
            }
            mostrarComponentes()
            break;
        case "menu":
            componentes={
                menu:["clickslogic"]
            }
            mostrarComponentes()
            break;
        case "modal":
            componentes={
                modal:[""]
            }
            mostrarComponentes()
            break;
        case "navegacion":
            componentes={
                navegacion:["asep"]
            }
            mostrarComponentes()
            break;
        case "paquete":
            componentes={
                paquete:["ePass","ePassMas"]
            }
            mostrarComponentes()
            break;
        case "posit":
            componentes={
                posit:["ePass","scorecard"]
            }
            mostrarComponentes()
            break;
        case "post":
            componentes={
                post:["gallito","gallitoB"]
            }
            mostrarComponentes()
            break;
        case "publicidad":
            componentes={
                publicidad:["ePass","epassFlecha"]
            }
            mostrarComponentes()
            break;
        case "redesSociales":
            componentes={
                redesSociales:["asep"]
            }
            mostrarComponentes()
            break;
        case "select":
            componentes={
                select:["asep"]
            }
            mostrarComponentes()
            break;
        case "slider":
            componentes={
                slider:["gallito","todobusco","gallitoB","dgalli","ePass","touch","boostrap"]
            }
            mostrarComponentes()
            break;
        case "tabs":
            componentes={
                tabs:["asep"]
            }
            mostrarComponentes()
            break;
        case "titulo":
            componentes={
                titulo:["asep"]
            }
            mostrarComponentes()
            break;
        case "vinietas":
            componentes={
                vinietas:["asep","clickslogic"]
            }
            mostrarComponentes()
            break;
        case "nuevo":
            componentes={
                nuevo:["componente"]
            }
            mostrarComponentes()
            break;
            
    }
}
function mostrarComponentes()
{
    limpiarContenedorComponentes();
    for (var key in componentes)
    {
        var componente=key;
        console.log(componente);
        for(var i in componentes[key])
        {
            var nombreComponente=componentes[key][i];            
            var link="../../public/"+componente+"/"+nombreComponente+"/"+componente+".html";
            $("#componentes-links-header-content").append("<span onclick=actualizarIframe('"+link+"','"+componente+"','"+nombreComponente+"') class='link-componente-iframe' href='"+link+"' >"+componente +" - "+ nombreComponente+"</span>")
        }
    }
    if(banderaPrimerClick==0)
    {
        $("#componentes-links-header-content span:first-child").trigger( "click" );
        $("#componentes-links-header-content span:first-child").addClass("nombreComponenteSeleccionado");
    }
    banderaPrimerClick=1;
}
function limpiarContenedorComponentes()
{
    $("#componentes-links-header-content").html("");
}
function actualizarIframe(link,componente,nombreComponente)
{
    $("#idIframe").attr("src",link);
    mostrarTextoPreview(componente,nombreComponente);

}
function mostrarTextoPreview(componente,nombreComponente)
{
    // mostramos el texto previuw y el comando de instalación
    $(".text-view-color").html(componente+" - "+nombreComponente)
    $(".comando-de-instalacion").html(" (comp.import "+componente+" "+nombreComponente+")")
}