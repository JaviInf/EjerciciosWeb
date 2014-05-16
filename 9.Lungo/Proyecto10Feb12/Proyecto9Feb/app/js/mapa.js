/**
 * @author iMac 9
 */

if (Modernizr.geolocation) {
	
	function showMap() {
		var mapcanvas = document.createElement('div');
		mapcanvas.id = 'mapcanvas';
		mapcanvas.style.height = '100%';
		mapcanvas.style.width = '100%';
		document.querySelector('#second-article').appendChild(mapcanvas);
		var latlng = new google.maps.LatLng(0, 0);
		var myOptions = {
			zoom : 2,
			center : latlng,
			mapTypeControl : false,
			navigationControlOptions : {
				style : google.maps.NavigationControlStyle.SMALL
			},
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
	};
	
	function createMap() {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '90%';
        document.querySelector('#second-article').appendChild(mapcanvas);
        var latlng = new google.maps.LatLng(0, 0);
        var myOptions = {
            zoom: 2,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        return map;
   };
   
   
   // añadior markador a mapa en la posicion y mapa ke le digo
	function addMarker(lat,lon, mapa) {
		console.log("latitud: "+lat+" longitud: "+lon);
        var latlng = new google.maps.LatLng(lat, lon);
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapa
        });
      return marker;
    }
    
    // crear ventana info con un contenido determinado
    function ventanaInfo(contentString){
    	var infowindow = new google.maps.InfoWindow({
			content : contentString
		});
		return infowindow;
    };
	
	
}