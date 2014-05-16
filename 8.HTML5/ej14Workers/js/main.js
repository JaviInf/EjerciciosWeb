$(document).ready(function() {
	var worker = new Worker('js/worker.js');
	$('#boton').on('click', function(e) {
		var numero = $('#numero').val();
		worker.postMessage(numero);
	});

	function onError(e) {
		document.getElementById('error').textContent = ['ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message].join('');
	}

	function onMsg(e) {
		$('#results').append(e.data);
	}
	worker.addEventListener('message', onMsg, false);
	worker.addEventListener('error', onError, false);

});

