class ModalGallito{
    constructor()
    {	this.validator;
    	this.validacion()
    	$(".btn").on("click",{obj:this},this.abrirModal)
    	

    }
    abrirModal(event){
    	var validator=event.data.obj.validator;
    	validator.resetForm();
    	$("#modal-gallito").modal("show");
    }
    validacion(){
    	this.validator=$("#form-recuperar-clave").validate({
            rules:{
                correo:{
                	required:true,
                    email:true,
                },
            },
        });
    }
}
var obj = new ModalGallito ();
