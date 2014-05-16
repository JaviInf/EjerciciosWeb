$(document).ready(function() {
	var d = new Date();
	var hora = "La hora de mi dispositivo es: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	$('#horalocal').html(hora);
})