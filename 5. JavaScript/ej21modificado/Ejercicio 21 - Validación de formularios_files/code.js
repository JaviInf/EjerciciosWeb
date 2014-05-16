var valida = function(){
	alert("Valido desde el evento onblur");
	var iden=this.value;
	alert(iden);
	var variable;
	variable = new Validator(this.iden);
	if(iden=="registro_nombre" || "registro_apellido" || "registro_email"){
		if(!variable.campoObligatorio()) return console.log("campoObligatorio");
	}
	else if (iden=="registro_email"){
		// if(!variable.campoEmail()) return console.log("Email no valido");
		if(!variable.emailValido()) return alert("Email no valido");
	}
	else if(iden=="registro_comentarios"){
		if(!variable.max50Car()) return console.log("Maximo 50 caracteres");
	}
	else if(iden=="registro_paswword"){
		if(!variable.password()) return console.log("Password no sigue formato, 6 minimos, letra min letra mayus, digito");
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
	var val= new Validator(nombre, email, comentario, pass);
	val.campoObligatorio(nombre);
	val.campoObligatorio(apellido);
	val.campoObligatorio(email);
	val.emailValido();
	//val.password();
	val.max50Car();
	e.preventDefault();
}

var formulario = document.getElementById("registro");
console.log(formulario);

formulario.addEventListener('blur', valida);
document.addEventListener('submit', validacion);

// var botonEnvia = document.getElementById("")
