/**
 * @author iMac 9
 */
//Load resource on app init
Lungo.init({
	name : 'Lungo.JS',
	resources : ['app/views/configuracion.html', 'app/views/detalles.html']
});

// creo la bd donde almaceno terremotos
console.log("Creo la BD");
BD.initBD();



// cargo datos a la bd
var parseResponse = function(result) {
	$$.each(result.features, function(idx, terremoto) {
		BD.addEarthquake(terremoto);
	});
	// Ya estan los datos en la BD, hago un select de 20
	BD.getEarthquakes(function(respuesta) {
		$$('#main-article ul').append('<li class="arrow lista" data-id='+respuesta.id+'>'+'<div class="on-left" data-count=""><span class="tag count">'+respuesta.mag+'</span></div>'+respuesta.title+"<br>"+ new Date(respuesta.time)+'<li>');
		$$('#third-article ul').append('<li class="arrow lista" data-id='+respuesta.id+'>'+'<div class="on-left" data-count=""><span class="tag count">'+respuesta.mag+'</span></div>'+respuesta.title+"<br>"+ new Date(respuesta.time)+'<li>');	
	});
};

var data = {
};
var url = "http://localhost/~imac9/LUNGO/Proyecto9Feb/data/all_day.geojson";
//var url = "http://localhost/curso/10.Lungo/ProyectoFeb7/data/all_day.geojson";
Lungo.Service.json(url, {}, parseResponse);

