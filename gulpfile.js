/******no tocar linea 1,2 y 3********/
var proyecto='gallito';
var vista='conocePlanes';
var tipo='proyecto';
/*librerias requeridas para correr gulp*/

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rename=require('gulp-rename'),
    rupture=require('rupture'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    buffer = require('vinyl-buffer'),
    spritesmith=require('gulp.spritesmith');// para realizar un sprite de las imagenes 
if(tipo=="proyecto")
{
    var rutaOrigen=['proyecto/'+proyecto+'/'+vista];
    var rutaDestinoVista="public/proyecto/"+proyecto+"/"+vista;
    var rutaImagenOrigen="static/imagenes/individuales/"+proyecto;
    var rutaImagenDestino="static/imagenes/sprite/"+proyecto;
    
}
else if(tipo=="componente")
{
    var rutaOrigen=['componentes/preprocesados/'+proyecto+'/'+vista];
    var rutaDestinoVista="componentes/public/"+proyecto+"/"+vista;
    var rutaImagenOrigen="static/imagenes/individuales/"+vista;
    var rutaImagenDestino="static/imagenes/sprite/"+vista;
    var rutaImagenCssDestino="componentes/preprocesados/"+proyecto+'/'+vista;
}

gulp.task("css-reload",function(){
    gulp.src(rutaOrigen+"/*.styl")
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(rutaDestinoVista))
        .pipe(connect.reload());

})
gulp.task("js-reload",function(){
    gulp.src(rutaOrigen+"/*.js")         
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(rutaDestinoVista))
        .pipe(connect.reload());
    console.log("escuchando el layout js")
    gulp.src(['proyecto/'+proyecto+'/layout/*.js'])         
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("public/proyecto/"+proyecto+"/layout"))
        .pipe(connect.reload());
})
gulp.task("jade-reload",function(){
     gulp.src(rutaOrigen+"/*.jade")
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.html'}))
            .pipe(gulp.dest(rutaDestinoVista))
            .pipe(connect.reload());
})
gulp.task("css",function(){
    gulp.src(rutaOrigen+"/*.styl")
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(rutaDestinoVista))
        .pipe(connect.reload());

})
gulp.task("js",function(){
    gulp.src(rutaOrigen+"/*.js")         
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(rutaDestinoVista))
        .pipe(connect.reload());
})
gulp.task("jade",function(){
     gulp.src(rutaOrigen+"/*.jade")
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.html'}))
            .pipe(gulp.dest(rutaDestinoVista))
            .pipe(connect.reload());
})
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});
function compile(watch) {
    
    function rebundle()
    {
   
    }
    if(watch)
    {
        console.log("Escuchando archivos del proyecto");
        gulp.watch(rutaOrigen+"/*.styl",['css']);
        gulp.watch(rutaOrigen+"/*.js",['js']);
        gulp.watch(rutaOrigen+"/*.jade",['jade']);
        gulp.watch(rutaImagenOrigen+"/*.*",['sprite']);
        gulp.watch(['proyecto/'+proyecto+'/layout/*.js'],['js']);

    }
    rebundle();
}
gulp.task('concatenarComponente', function () {
    
        gulp.src(['./componentes/public/'+proyecto+'/'+vista+'/estrcutura.html', './componentes/public/'+proyecto+'/'+vista+'/'+proyecto+'.html'])
        .pipe(concat('resultado.html'))
        .pipe(gulp.dest("componentes/public/"+proyecto+"/"+vista+"/"))

});

gulp.task('sprite', function() {
    
    var spriteData = gulp.src(rutaImagenOrigen+'/*.*') // source path of the sprite images
            .pipe(buffer())
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }));

   return spriteData.pipe(gulp.dest(rutaImagenDestino)); // output path for the sprite
    //spriteData.css.pipe(gulp.dest(rutaImagenDestino)); // output path for the CSS


/*
    var spriteData = gulp.src(rutaImagenOrigen+'/*.*').pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));
    return spriteData.pipe(gulp.dest(rutaImagenDestino));*/
});

gulp.task("watch",function(){
    
    return compile(true);
})

gulp.task("default",["css-reload","js-reload","jade-reload","watch","connect"])
gulp.task("componente",["css","js","jade","sprite","watch","connect"])
gulp.task("subirComponente",function()
{
    /*aqui pondras los componentes que subiras a gh pages*/
    var componentes={
        banner:["todobusco"],
        button:["asepAzul"],
        contadores:["gallito"],
        footer:["asep","todobusco","gallito"],
        formulario:["ePass","reclamacionesEpass"],
        gota:["ePass"],
        grafico:["cliclogix"],
        header:["gallito","todobusco","zkte","asep","clickslogic","ePass"],
        icons:["gallito","todobusco"],
        input:["asep","fileAsep","textAsep"],
        inscripcion:["asep"],
        menu:["clickslogic"],
        navegacion:["asep"],
        paquete:["ePass","ePassMas"],
        posit:["ePass","scorecard"],
        post:["gallito","gallitoB"],
        publicidad:["ePass","epassFlecha"],
        redesSociales:["asep"],
        slider:["todobusco","gallito","gallitoB","touch","ePass","boostrap","dgalli"],
        tabs:["asep"],
        select:["asep"],
        titulo:["asep"],
        vinietas:["asep","clickslogic"]
    }
    for (key in componentes)
    {
        var componente=key;
        console.log(componente);
        for(i in componentes[key])
        {
            var nombreComponente=componentes[key][i];
            var rutaOrigen=['componentes/preprocesados/'+componente+'/'+nombreComponente];
            var rutaDestinoVista="componentes/public/"+componente+"/"+nombreComponente;

                gulp.src(rutaOrigen+"/*.styl")
                    .pipe(stylus({use:[rupture()]}))
                    .pipe(gulp.dest(rutaDestinoVista));

         
           
                gulp.src(rutaOrigen+"/*.js")         
                    .pipe(babel({
                        presets: ['es2015']
                    }))
                    .pipe(gulp.dest(rutaDestinoVista));
          
          
                 gulp.src(rutaOrigen+"/*.jade")
                        .pipe(jade({
                            pretty: true
                        }))
                        .pipe(rename({extname:'.html'}))
                        .pipe(gulp.dest(rutaDestinoVista));
        }
        
        //document.write("<br>"+key+" - "+value);
    }
    
})
gulp.task("repoComponentes",function()
{
    var rutaOrigen=['componentes/zkte/preprocesados/'];
    var rutaDestinoVista="componentes/zkte/public";
    gulp.src(rutaOrigen+"/css/*.styl")
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(rutaDestinoVista))
        .pipe(connect.reload());
    gulp.src(rutaOrigen+"/js/**/*.js")         
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(rutaDestinoVista))
        .pipe(connect.reload());
    gulp.src(rutaOrigen+"/*.jade")
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.html'}))
            .pipe(gulp.dest(rutaDestinoVista))
            .pipe(connect.reload());
})