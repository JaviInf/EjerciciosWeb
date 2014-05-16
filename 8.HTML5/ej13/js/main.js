$(document).ready(function() {
	// Calcular posición

	function showMap(coords) {
		var mapcanvas = document.createElement('div');
		mapcanvas.id = 'mapcanvas';
		mapcanvas.style.height = '400px';
		mapcanvas.style.width = '560px';

		document.querySelector('article').appendChild(mapcanvas);

		var latlng = new google.maps.LatLng(coords.latitude, coords.longitude, coords.acuracy);

		var myOptions = {
			zoom : 15,
			center : latlng,
			mapTypeControl : false,
			navigationControlOptions : {
				style : google.maps.NavigationControlStyle.SMALL
			},
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

		var marker = new google.maps.Marker({
			position : latlng,
			map : map,
			title : "¡Usted está aquí!"
		});}
		
		
		function muestra(coords){
		var mapvel = document.createElement('div');
		mapvel.id = 'mapvel';
		mapvel.style.height = '40px';
		mapvel.style.width = '56px';

		document.querySelector('article').appendChild(mapvel);
		
		 var speedEl = document.getElementById('speed');
		
		 navigator.geolocation.watchPosition(function(coords) {
			var speed = coords.speed;
			if (speed === null || speed === 0) {
				speedEl.innerHTML = "You're standing still!";
			} else {
				// speed is in metres per second
				speedEl.innerHTML = speed + 'Mps';
			}
		}, function() {
			speedEl.innerHTML = "Unable to determine speed :-(";
		}, {
			enableHighAccuracy : true
		});
	}

	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var coords = position.coords;
			showMap(coords);
			$('#status').text('latitud:  ' + coords.latitude + '  longitud:  ' + coords.longitude + ' precision:  ' + coords.accuracy+' speed:   '+coords.speed);
			muestra(coords);
		});

	} else {
	}

}); 