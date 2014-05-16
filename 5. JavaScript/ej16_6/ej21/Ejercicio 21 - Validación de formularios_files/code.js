var valida = function(){
	console.log("estoy validando campo por campo");
	var id=this.id;
	var variable;
	variable = new Validator(this.id);
	if(id=="registro_nombre" || "registro_apellido" || "registro_email"){
		if(!variable.campoObligatorio()) return console.log("campoObligatorio");
	}
	else if (id=="registro_email"){
		// if(!variable.campoEmail()) return console.log("Email no valido");
		if(!variable.emailValido()) return alert("Email no valido");
	}
	else if(id=="registro_comentarios"){
		if(!variable.max50Car()) return console.log("Maximo 50 caracteres");
	}
	else if(id=="registro_paswword"){
		if(!variable.password()) return console.log("Password no sigue formato, 6 minimos, letra min letra mayus, digito");
	}
}

	window.$ = function (selector){
	   			return document.querySelectorAll(selector);
	}
	
var validacion = function(){
	console.log("ejecuto validacion submit");
	var nombre= new Validator("registro_nombre");
	if(!nombre.campoObligatorio()) {
		return alert("campo obligatorio");
	}
	
	var apellido= new Validator("registro_apellido");
	if(!apellido.campoObligatorio()) return console.log("campoObligatorio apellido");
	
	// console.log("kjkljkljkljkljkljkljlk");
	
	var email= new Validator("registro_email");
	if(!email.campoObligatorio()) return console.log("campoObligatorio");
	if(!email.emailValido()) return console.log("Email no valido");
	
	var password= new Validator("registro_password");
	if(!variable.password()) return console.log("Password no sigue formato, 6 minimos, letra min letra mayus, digito");
	
	var comentario= new Validator("registro_comentarios");
	if(!variable.max50Car()) return console.log("Maximo 50 caracteres");
	// e.preventDefault();
}

var formulario = document.getElementById("registro");
console.log(formulario);

document.addEventListener('blur', valida);
document.addEventListener('submit', validacion);

// var botonEnvia = document.getElementById("")
