var nroSliderEstudios=0;
var nroSliderExperiencia=0;
var nroSliderIdioma=0;
var nroSliderPrograma=0;
var nroSliderPregunta=0;
function Estudios(carreraText,carreraVal,tipoCarreraText,tipoCarreraVal,nivelText,nivelVal)
{
	this.carreraText=carreraText;
	this.carreraVal=carreraVal;
	this.tipoCarreraText=tipoCarreraText;
	this.tipoCarreraVal=tipoCarreraVal;
	this.nivelText=nivelText;
	this.nivelVal=nivelVal;
}
function Experiencia(nivelCargoText,nivelCargoVal,areaText,areaVal,tiempoText,tiempoVal)
{
	this.nivelCargoText=nivelCargoText;
	this.nivelCargoVal=nivelCargoVal;
	this.areaText=areaText;
	this.areaVal=areaVal;
	this.tiempoText=tiempoText;
	this.tiempoVal=tiempoVal;
}

function Idioma(idiomaText,idiomaVal,nivelText,nivelVal)
{
	this.idiomaText=idiomaText;
	this.idiomaVal=idiomaVal;
	this.nivelText=nivelText;
	this.nivelVal=nivelVal;
}
function Programa(programaText,programaVal,nivelText,nivelVal)
{
	this.programaText=programaText;
	this.programaVal=programaVal;
	this.nivelText=nivelText;
	this.nivelVal=nivelVal;
}
class FormularioGallitoRegistro{
    constructor()
    {
    	
    	this.previwIMage();
    	this.arrayEstudios=[];
    	this.arrayExperiencia=[];
    	this.arrayIdioma=[];
    	this.arrayPrograma=[];
    	this.iniciarValidate();
    	$("#addEstudio").on("click",{obj:this },this.addEstudio)
    	$("#addExperiancia").on("click",{obj:this },this.addExperiancia)
    	$("#addIdioma").on("click",{obj:this },this.addIdioma)
    	$("#addPrograma").on("click",{obj:this },this.addPrograma)
    	$("#addPregunta").on("click",{obj:this },this.addPregunta)
    	$("#btn-guardarDatos-finta").on("click",this.simularSubmit)
    }
    previwIMage()
    {
    	$("#archivo").change(function () {
	        if (this.files && this.files[0]) 
	        {
	        	$(".text-gallito-img-upload").addClass("hideDiv");
	            var reader = new FileReader();

	            reader.onload = function (e) {
	                $('#image_upload_preview').attr('src', e.target.result);
	            }

	            reader.readAsDataURL(this.files[0]);
	    	}
	    });
    }
    drawTamplateAddHability(idTemplate,contenido,nroId,tipo)
    {
    	var template=
    	`<div class="cuadro-item">
    		<span>${contenido}</span>
    		<i class="fa fa-times close-hability" id="${tipo}-${nroId}" value="${nroId}" tipo="${tipo}" aria-hidden="true"></i>
    	</div>`;
    	$(idTemplate).append(template);
    	$(".close-hability").off("click");
    	$(".close-hability").on("click",{obj:this },this.deleteItem);
    }
    drawPregunta()
    {
    	/*
    	var template=
    	`<div class="cuadro-item">
    		<span>${contenido}</span>
    		<i class="fa fa-times close-hability" id="${tipo}-${nroId}" value="${nroId}" tipo="${tipo}" aria-hidden="true"></i>
    	</div>`;
    	$(idTemplate).append(template);*/
    }
    deleteItem(event)
    {
    	var idABorrar=$(this).attr("value")
    	var tipo=$(this).attr("tipo")
    	switch(tipo) {
		    case "estudios":
		        delete event.data.obj.arrayEstudios[idABorrar];
    			console.log(event.data.obj.arrayEstudios);
		        break;
		    case "experiencia":
		        delete event.data.obj.arrayExperiencia[idABorrar];
    			console.log(event.data.obj.arrayExperiencia);
		        break;
		    case "idioma":
		        delete event.data.obj.arrayIdioma[idABorrar];
    			console.log(event.data.obj.arrayIdioma);
		        break;
		    case "programa":
		        delete event.data.obj.arrayPrograma[idABorrar];
    			console.log(event.data.obj.arrayPrograma);
		        break;
		}
    	
    	$(this).parent().remove()
    }
    limpiarFormulario(div)
    {
    	$(div+" select").each(function (index) 
        { 
            var idSelect=$(this).attr("id");
            console.log(idSelect);
            $("#"+idSelect).prop('selectedIndex',0);
            $("#"+idSelect).trigger("change");
        })
    }
    addPregunta(event)
    {
    	nroSliderPregunta=nroSliderPregunta+1;
    	//event.data.obj.drawPregunta("#cont-programa-add",programaText,nroSliderPrograma,"programa");
    }

    addPrograma(event)
    {
    	var validatePrograma=$("#formulario-registro-1").validate().element("#id_select_programa");
    	var validateNivel=$("#formulario-registro-1").validate().element("#id_select_nivel_programa");
    	if(validatePrograma && validateNivel)
    	{
    		var programaText=$("#id_select_programa option:selected" ).text();
	    	var programaVal=$("#id_select_programa" ).val();
	    	var nivelText=$("#id_select_nivel_programa option:selected" ).text();
	    	var nivelVal=$("#id_select_nivel_programa" ).val();

	    	var programa = new Programa(programaText,programaVal,nivelText,nivelVal);
			// Creamos un arreglo para almacenarlos
			 
			event.data.obj.arrayPrograma.push(programa);

	    	event.data.obj.drawTamplateAddHability("#cont-programa-add",programaText,nroSliderPrograma,"programa");
	    	event.data.obj.limpiarFormulario(".cont-input-programa");
	    	nroSliderPrograma=nroSliderPrograma+1;
	    	console.log(event.data.obj.arrayPrograma)
    	}
    }
    addIdioma(event)
    {
    	var validateIdioma=$("#formulario-registro-1").validate().element("#id_select_idioma");
    	var validateNivel=$("#formulario-registro-1").validate().element("#id_select_nivel_idioma");
    	if(validateIdioma && validateNivel)
    	{
    		var idiomaText=$("#id_select_idioma option:selected" ).text();
	    	var idiomaVal=$("#id_select_idioma" ).val();
	    	var nivelText=$("#id_select_nivel_idioma option:selected" ).text();
	    	var nivelVal=$("#id_select_nivel_idioma" ).val();

	    	var idioma = new Idioma(idiomaText,idiomaVal,nivelText,nivelVal);
			// Creamos un arreglo para almacenarlos
			 
			event.data.obj.arrayIdioma.push(idioma);

	    	event.data.obj.drawTamplateAddHability("#cont-idioma-add",idiomaText,nroSliderIdioma,"idioma");
	    	event.data.obj.limpiarFormulario(".cont-input-idioma");
	    	nroSliderIdioma=nroSliderIdioma+1;
	    	console.log(event.data.obj.arrayIdioma)
    	}
    }
    addExperiancia(event)
    {
    	//$('input[name="select_carrera_profesional"]').valid();
    	var validateNivelCargo=$("#formulario-registro-1").validate().element("#id_nivel_cargo");
    	var validateArea=$("#formulario-registro-1").validate().element("#id_select_area");
    	var validateTiempo=$("#formulario-registro-1").validate().element("#id_select_tiempo_experiencia");
    	if(validateNivelCargo && validateArea && validateTiempo)
    	{
    		var nivelCargoText=$("#id_nivel_cargo option:selected" ).text();
	    	var nivelCargoVal=$("#id_nivel_cargo" ).val();
	    	var areaText=$("#id_select_area option:selected" ).text();
	    	var areaVal=$("#id_select_area" ).val();
	    	var tiempoText=$("#id_select_tiempo_experiencia option:selected" ).text();
	    	var tiempoVal=$("#id_select_tiempo_experiencia" ).val();

	    	var experiencia = new Experiencia(nivelCargoText,nivelCargoVal,areaText,areaVal,tiempoText,tiempoVal);
			 
			// Creamos un arreglo para almacenarlos
			 
			event.data.obj.arrayExperiencia.push(experiencia);

	    	event.data.obj.drawTamplateAddHability("#cont-experiencia-add",nivelCargoText,nroSliderExperiencia,"experiencia");
	    	event.data.obj.limpiarFormulario(".cont-input-experiencia");
	    	nroSliderExperiencia=nroSliderExperiencia+1;
	    	console.log(event.data.obj.arrayExperiencia)
    	}
    }
    addEstudio(event)
    {

    	//$('input[name="select_carrera_profesional"]').valid();
    	var validateCarrera=$("#formulario-registro-1").validate().element("#id_select_carrera");
    	var validateTipoCarrera=$("#formulario-registro-1").validate().element("#id_select_tipo_carrera");
    	var validateNivel=$("#formulario-registro-1").validate().element("#id_select_nivel");
    	if(validateCarrera && validateTipoCarrera && validateNivel)
    	{
    		var carreraText=$("#id_select_carrera option:selected" ).text();
	    	var carreraVal=$("#id_select_carrera" ).val();
	    	var tipoCarreraText=$("#id_select_tipo_carrera option:selected" ).text();
	    	var tipoCarreraVal=$("#id_select_tipo_carrera" ).val();
	    	var nivelText=$("#id_select_nivel option:selected" ).text();
	    	var nivelVal=$("#id_select_nivel" ).val();

	    	var estudio = new Estudios(carreraText,carreraVal,tipoCarreraText,tipoCarreraVal,nivelText,nivelVal);
			 
			// Creamos un arreglo para almacenarlos
			 
			event.data.obj.arrayEstudios.push(estudio);

	    	event.data.obj.drawTamplateAddHability("#cont-estudio-add",carreraText,nroSliderEstudios,"estudios");
	    	event.data.obj.limpiarFormulario(".cont-input-estudios");
	    	nroSliderEstudios=nroSliderEstudios+1;
	    	console.log(event.data.obj.arrayEstudios)
    	}
    	

    }
    iniciarValidate()
    {

    	$("#formulario-registro-1").validate({
        rules:{
                titulo_aviso:{
                    required:true
                },
                select_carrera_profesional:
                {
                	required:true
                },
                select_tipo_carrera:
                {
                	required:true
                },
                select_nivel:
                {
                	required: true
                },
                select_nivel_cargo:
                {
                	required: true
                },
                select_area:
                {
                	required:true
                },
                slect_tiempo_experiencia:
                {
                	required:true
                },
                select_idioma:
                {
                	required:true
                },
                select_nivel_idioma:
                {
                	required:true
                },
                select_programa:
                {
                	required:true
                },
                select_nivel_programa:
                {
                	required:true
                }
              
            },
            messages: {
                  
             }
           ,highlight: function (element) {
           		$(element).parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv")
               $(element).addClass('error-validacion');
           
           },
           unhighlight: function (element) {
               $(element).removeClass('error-validacion');

               $(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
               $(element).parent().parent().find(".cont-module-error").find(".icon-alert").addClass("hideDiv");
             

           },
           errorPlacement: function(error, element) {
           		error.appendTo( element.parent().parent().find(".cont-module-error").find(".error-format"));
               	element.parent().parent().find(".cont-module-error").find(".icon-alert").removeClass("hideDiv")
           			
           }
    	});
    }

}
var obj = new FormularioGallitoRegistro ();
