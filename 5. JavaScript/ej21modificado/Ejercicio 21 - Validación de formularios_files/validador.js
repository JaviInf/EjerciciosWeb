var Validator = function(nombre, email,comentario, pass ){

		this.campoObligatorio=function(nombre){
			// valor = document.getElementById(id).value;
			if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
				alert("Campo obligatorio");
  				return false;
			}else {
				return true;
			}
		}
	
		this.emailValido=function(){
			// valor = document.getElementById(id).value;
			if(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(email)) {
  				return true;	
			}
			else {
				alert("Email no valido");
				return false;
			}
		}

		this.max50Car=function(){
  			if(comentario.length >= 50 ) {
  				alert("Solo 50 letras");
    			return false;
  			}
 		 	else {
    			return true;
  			}
  			
		}
		
		this.password=function(){
			// var p1 = document.getElementById(id).value;
			
			var letraMin=false;
			var letraMayus=false;
			var digito=false;
			if(pass.length<6){
				return false;
			}		
			for(var i=0; i<pass.length; i++){
				var letraMayus=pass[i].toUpperCase();
				var letraMinus=pass[i].toLowerCase();
				if(pass[i]===letraMayus){
					letraMayus=true;
				}
				else if(pass[i]===letraMinus){
					letraMin=true;
				}
				else if(typeof pass[i]=='number'){
					alert("Detecto numero");
					digito=true;
				}	
			}
			if(letraMin && letraMayus && digito){
				return true
			}
			else {
				return false;
			}
		 }
}

