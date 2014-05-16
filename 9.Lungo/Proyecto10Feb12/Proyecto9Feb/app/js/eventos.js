/**
 * @author iMac 9
 */
Lungo.dom(document).ready(function() {
	
	//Evento cuando se carga el articulo1 de la seccion main
	Lungo.dom('#main-article').on('load', function(event) {
	});

	Lungo.dom('#main-article').on('unload', function(event) {
	});

	//Evento cuando se carga el articulo2 de la seccion main
	Lungo.dom('#second-article').on('load', function(event) {
		var mapa = createMap();
		BD.getEarthquakes50(function(respuesta) {
			var marker = addMarker(respuesta.long, respuesta.lat, mapa);
			google.maps.event.addListener(marker, 'click', function() {
				ventanaInfo("<strong>Descripcion</strong>: "+respuesta.title+" <br>"+"<strong>Magnitud del terremoto:</strong> "+respuesta.mag+"  <br>"+"<strong>Longitud: </strong>"+respuesta.lat+" <strong>Latitud: </strong>"+respuesta.long).open(mapa,marker);
			});

		});
	});

	//Evento cuando se carga el articulo3 de la seccion main
	Lungo.dom('#third-article').on('load', function(event) {

	});

	// Evento para cambiar a seccion configuracion
	Lungo.dom('#features a').on('click', function(event) {
		Lungo.Router.section("configuracion");
	});

	Lungo.dom('#detalles').on('load', function(event) {
	});

	//Evento que salta cuando unload seccion detalles

	//Evento para cambiar a detalles al pulsar en un terremoto
	$$(document).on('tap', 'li.lista', function(e) {
		var id = this.getAttribute("data-id");
		muestraDetalles(id);
		console.log("Voy a detalles.html");
		Lungo.Router.section("detalles");

	});

	Lungo.dom('#detalles').on('unload', function(event) {
		reseteaDetalles();
	});
	
	Lungo.dom('#detalles #share span').on('click', function(event) {
		
		Lungo.Notification.html('<h1>Compartir Facebook</h1><br>Compartir con google', "Close");
	});

	//Evento en el range de configuracion
	Lungo.dom('#configuracion #opciones input').on('click', function(event) {
		console.log(Lungo.dom('#configuracion #opciones input').val());
	});

	//evento en el select de congifuracion
	Lungo.dom('#configuracion #opciones select').on('change', function(event) {
		console.log(Lungo.dom('#configuracion #opciones select').val());
	});

	//Evento en el button de configuracion
	Lungo.dom('#configuracion a.button').on('click', function(event) {
		console.log("Boton de restaurar por defecto");
	});

	//Evento de busqueda
	Lungo.dom('#third-article .form input').on('change', function(event) {
		console.log("Evento busqueda");
	});

});
