$(document).ready(function() {

	function esPrimo(numero) {
		p = parseInt(numero);
		var divisores = 2;
		for ( j = 2; j < p; j++) {
			if (p % j == 0) {
				divisores++;
				break;
			}
		}
		if (divisores == 2) {
			$('#mostrar').append(numero).append(" ");
		}
	}


	$('#boton').on('click', function(e) {
		var numero = $('#numero').val();
		for (var i = 1; i < numero; i++) {
			esPrimo(i);
		}
		console.log(numero);
	});
	
});

