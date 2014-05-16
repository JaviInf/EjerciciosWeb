/**
 * @author iMac 9
 */
(function($){
  $.fn.validar = function(e) {
      return this.each(function(){
      	$form=$(this);
      	
			 $('.required').each(function(){
			 	$this=$(this);
			 	if($this.val()==undefined || $this.val()===null || $this.val().length===0 || /^s+$/.test($this.val())){
			 		if(!$this.siblings().hasClass("fieldspan")){
			 			var $error = $('<div/>').insertAfter($this);
			 		    $error.text("Error esto es un campo requerido").addClass("fieldspan");
			 		    $this.addClass("fielderror");}
			 	}
			 	else if($this.attr('type')=='checkbox' && $this.not(':checked')){
			 		if(!$this.siblings().hasClass("fieldspan")){
			 			var $error = $('<div/>').insertAfter($this);
			 			$error.text("Error esto es un campo requerido").addClass("fieldspan");}
			 		
			 		if($this.attr('type')=='checkbox' && $this.is(':checked')){
			 			$this.siblings('.fieldspan').remove();}
			 	}
			 	else{
			 		$this.siblings(".fieldspan").remove();
			 		$this.removeClass('fielderror');}
			 });
			 
			  $('.email').each(function(){
			 		$this=$(this);
			    	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
			    	if(!filter.test($this.val())){
			    		if(!$this.siblings().hasClass("fieldspan")){
			 				var $errorEmail = $('<div/>').insertAfter($this);
			 			    $errorEmail.text("Error no es un email valido").addClass("fieldspan");
			 			    $this.addClass("fielderror");
			 			}
			    		
			 		}else {
			 			$this.siblings(".fieldspan").remove();
			 			$this.removeClass('fielderror');
			 		}
			 });
			 
			  $('.password').each(function(){
			 	$this=$(this);
			 	var may = /[A-Z]/;
        		var min = /[a-z]/;
        		var dig = /[0-9]/;
        		console.log($this.val().length);
        		if($this.val().length<6 || !(may.test($this.val())) || !(min.test($this.val())) || !(dig.test($this.val()))){
			    	if(!$this.siblings().hasClass("fieldspan")){
			 			var $errorPass = $('<div/>').insertAfter($this);
			 			$errorPass.text("No es un password valido").addClass("fieldspan");
			 			$this.addClass("fielderror");
			 		}
			 	}else {
			 			$this.siblings(".fieldspan").remove();
			 			$this.removeClass('fielderror');
			 	}
			 });
			 
			  $('.url').each(function(){
			 	$this=$(this);
			   // console.log("campo url: "+$this.attr('id'));
			    var regex=/^(ht|f)tps?:\/\/\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(\/.*)?$/i;
			    if(!regex.test($this.val())){
			    	if(!$this.siblings().hasClass("fieldspan")){
			 			var $errorUrl = $('<div/>').insertAfter($this);
			 			$errorUrl.text("No es una url valida").addClass("fieldspan");
			 			$this.addClass("fielderror");
			 		}
			 	}else {
			 		$this.siblings(".fielspan").remove();
			 		$this.removeClass('fielderror');
			 	}
			 });
			 
			  $('.number').each(function(){
			 	$this=$(this);
			     if (!/^([0-9])*$/.test($this.val())){
			     	if(!$this.siblings().hasClass("fieldspan")){
			 			var $errorNumero = $('<div/>').insertAfter($this);
			 			$errorNumero.text("Error no es un numero").addClass("fieldspan");
			 			$this.addClass("fielderror");
			 			}	
  				}
  				else{
			 		$this.siblings(".fieldspan").remove();
			 		$this.removeClass('fielderror');
			 	}
			 });
			 
		if($('input.fielderror').length>0){
			console.log("Hay errores"+$('input.fielderror').length);
			e.preventDefault();
		}
		else {
			alert("Formulario enviado correctamente");
			$('form').ajaxForm(function(){ 
				console.log("jhjhjh");
                alert("Thank you for your comment!"); 
            });
		}
      });
  };
})(jQuery);


//validacion del formulario
console.log("validacion del formulario");
$('form').on('submit', function(e){	
	$('#registro').validar(e);
	//e.preventDefault();
});

$('#registro_nombre').on('blur',function(e){	
	//$('#registro').validar(e);
});
 