/**
 * @author iMac 9
 */
window.$ = function(selector) {
	return document.querySelectorAll(selector);
}
window.onload = function() {

	var municipio = $('#municipio')[0];
	var provincia = $('#provincia')[0];
	var dameDatos = new AJAX();
	
	var mostrarProvincia = function(texto) {
		var objeto_json = JSON.parse(texto);
		for (var i in objeto_json) {
			provincia.options[i] = new Option(objeto_json[i],i);
		}
	}
	
	var mostrarMunicipio = function(texto){
		var objeto_json = JSON.parse(texto);
		for (var i in objeto_json) {
			municipio.options[i] = new Option(objeto_json[i],i);
		}
	}
	
	dameDatos.get({
		url : "http://localhost/~imac9/AJAX/ej07/servidor/cargaProvinciasJSON.php",
		success : mostrarProvincia,
		error : mostrarError
	});
	
	var quieroMunicipio= function () {
		dameDatos.post({
			url: "http://localhost/~imac9/AJAX/ej07/servidor/cargaMunicipiosJSON.php",
			data: provincia:  ,
			success: mostrarMunicipio,
			error: mostrarError
		});
	}
	
	
	
	
	var mostrarError = function(error) {
		console.log(error);
	}
	
	provincia.addEventListener('change', quieroMunicipio);
	
}