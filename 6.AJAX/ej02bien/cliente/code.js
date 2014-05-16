window.$ = function(selector) {
	return document.querySelectorAll(selector);
}



window.onload = function() {

	var noticias = [];

	var ajax = new AJAX();

	var contenidos = $("#ticker")[0];


	var mostrarNoticia = function(texto) {

		fecha = new Date();

		horas = fecha.getHours();

    	minutos = fecha.getMinutes();

    	segundos = fecha.getSeconds();

    	if(horas < 10) 

   			 horas = '0' + horas; 

		if(minutos < 10) 

			minutos = '0' + minutos; 

		if(segundos < 10) 

		segundos = '0' + segundos;


		noticias.push(texto);

	contenidos.innerHTML = noticias[noticias.length-1]+" Hora: "+horas+":"+minutos+":"+segundos;

	}


	var mostrarError = function(error) {

		console.log(error);

	}


	var interval = setInterval(function(){

		ajax.get({
	url : "http://localhost/~imac9/AJAX/Ej02bien/servidor/generaContenidos.php",
	success : mostrarNoticia,
	error : mostrarError
	});

	}, 1000);


	$("#detener")[0].addEventListener("click", function(e){

		clearInterval(interval);

	});

}

