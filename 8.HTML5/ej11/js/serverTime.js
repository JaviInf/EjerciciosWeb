$(document).ready(function() {
	var d = new Date();
	var minutes=d.getMinutes()-10;
	var hora = "La hora del servidor es: " + d.getHours() + ":" + minutes + ":" + d.getSeconds();
	$('#horaServer').html(hora);
});