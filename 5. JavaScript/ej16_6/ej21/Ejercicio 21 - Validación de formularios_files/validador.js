var Validator = function(id){

		this.campoObligatorio=function(){
			valor = document.getElementById(id).value;
			if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
				alert("Campo obligatorio");
  				return false;
  				
			}else {
				return true;
			}
		}
	
		this.emailValido=function(){
			valor = document.getElementById(id).value;
			alert(valor);
			if(/^[0-9a-z_\-\.]+@([a-z0-9\-]+\.?)*[a-z0-9]+\.([a-z]{2,4}|travel)$/i.test(valor)) {
				alert("email no valido");
  				return false;	
			}
			else {
				return true;
			}
		}

		this.max50Car=function(){
  			var elemento = document.getElementById(id);
  			if(elemento.value.length >= 50 ) {
  				alert("maximo numero de caracteres");
    			return false;
  			}
 		 	else {
    			return true;
  			}
		}
		
		this.pasword=function(){
			var p1 = document.getElementById(id).value;
			var letraMin=false;
			var letraMayus=false;
			var digito=false;
			if(p1.length<6){
				return false;
			}
			
			for(var i=0; i<p1.length; i++){
				var letraMayus=p1[i].toUpperCase();
				var letraMinus=p1[i].toLoweCase();
				if(p1[i]===letraMayus){
					letraMayus=true;
				}
				if(p1[i]===letraMinus){
					letraMin=true;
				}
				if(p1[i]){
					digito=true;
				}	
			}
			if(letraMin && letraMayus && digito){
				return true
			}
			else {
				alert("pasword incorrecto");
				return false;
			}
		}
}

