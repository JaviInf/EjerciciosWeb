/**
 * @author iMac 9
 */
var muestraDetalles=function(id,e){
			BD.getEarthquake(id, function(respuesta){
			var fecha=new Date(respuesta.time);
			 var titulo=respuesta.title;
			 var mag="Magnitud: "+respuesta.mag;
			 var cordinadas=respuesta.lat;
			 var depth="Profundidad: "+respuesta.depth;
			 var fecha2=" Zona horaria: "+new Date(respuesta.time);
			 var cordin="Lugar: "+mag+","+respuesta.long;
			 var det='<a href="'+respuesta.link+'">'+respuesta.link+'</a>';
			 $$('#detal ul').append('<li>'+titulo+'<br>'+fecha+'<br><br>'+mag+'<br>'+depth+'<br>'+fecha2+'<br>'+cordin+'<br>'+det+'<li>');
		});
		//createMap2();
};

var reseteaDetalles=function(){
	$$('#detal ul li').remove();
};

