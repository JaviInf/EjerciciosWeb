/**
 * @author iMac 9
 */
console.log("Creo la BD");
BD.iniciarBD();

console.log("Añado tweets");

$.getJSON(
	'http://localhost/~imac9/HTML5/ej09/servidor/data/search.json',
	function(tweets) {
		$.each(tweets.statuses, function(idx, tweet) {
			BD.addTweet(tweet);
		});
	}
);
console.log("dame tweet");
var id=428442203237933069;


BD.getTweet(id,function(respuesta){
	alert(respuesta);
	alert(respuesta.text);
});

console.log("Borro un tweet");
// BD.removeTweet(id,function(repuesta){
	// alert("acabo de borrar un tweet");
	// alert("es el tweet"+respuesta.txt);
// });

console.log("Actualizo un tweet");

// BD.updateTweet(tweet);

console.log("Obtengo tweets de fecha");
var fecha;
// BD.getTweets(fecha);

