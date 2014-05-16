var valida = function(){
	var iden=this.id;
	var valor=document.getElementById(this.id).value;
	var variable = new Validator();
	 if(iden=="registro_nombre" || "registro_apellido" || "registro_email"){
			variable.campoObligatorio(valor)
			if (iden=="registro_email"){
				variable.emailValido(valor);
			}
		}
	else if(iden=="registro_comentarios"){
		variable.max50Car(valor);
	}
	else if(iden=="registro_paswword"){
		//variable.password(valor);
	}
}

	window.$ = function (selector){
	   			return document.querySelectorAll(selector);
	}
	
var validacion = function(e){
	var nombre = document.getElementById("registro_nombre").value;
	var apellido=document.getElementById("registro_apellido").value;
	var email=document.getElementById("registro_email").value;
	var pass=document.getElementById("registro_password").value;
	var comentario=document.getElementById("registro_comentarios").value;
	
	var val= new Validator();
	
	val.campoObligatorio(nombre);
	val.campoObligatorio(apellido);
	val.campoObligatorio(email);
	val.emailValido(email);
	//val.password();
	val.max50Car(comentario);
	e.preventDefault();
}

 // var formulario = document.getElementById('registro');
 // console.log(formulario);

document.getElementById('registro_nombre').addEventListener('blur',valida);
document.getElementById('registro_apellido').addEventListener('blur',valida);
document.getElementById('registro_email').addEventListener('blur',valida);
document.getElementById('registro_nombre').addEventListener('blur',valida);
document.getElementById('registro_password').addEventListener('blur',valida);
document.getElementById('registro_comentarios').addEventListener('blur',valida);

// formulario.addEventListener('blur', valida);
document.addEventListener('submit', validacion);

// var botonEnvia = document.getElementById("")
