$(function() {"use strict";

	// Obtener los elementos del DOM

	// Mi color asignado por el servidor
	var myColor = false;
	// Mi nick
	var myName = false;

	// Comprobar la disponibilidad de Web Socket en el navegador
	if (!Modernizr.websockets) {
		return false;
	}

	window.WebSocket = window.WebSocket || window.MozWebSocket;

	// Abrir la conexion con ws://www.arkaitzgarro.com:1337
	var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

	// 1. Al abrir la conexión, solicitar el nick.
	// $('#input').attr('disabled', false);
	//var nick=JSON.stringify($('#input').val());
	socket.onopen = function(e) {
		console.log("Welcome - status " + this.readyState);
		$('#status').text("Introduce nick: ");
		$('#input').attr('disabled', false);
	};

	socket.onclose = function(e) {
		console.log("Disconnected - status " + this.readyState);
		$('#status').text("Disconnected");
		$('#input').attr('disabled', true);
	};

	$('#input').on('Keypress', function(e) {
		if (e.keycode === 13) {
			socket.send($('#input').val());
		}
	})
	$('#boton').on('click', function(e) {
		socket.send(JSON.stringify($('#input').val()));
	});

	// 2. Controlar posibles errores del servidor.
	// 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
	socket.onmessage = function(event) {
		try {
			var obj = JSON.parse(event.data);
			console.log(obj);
		} catch(ex) {
			return false;
		}

		if (obj.type === "history") {
			for (var i = 0; i < obj.data.length; i++) {
				addMessage(obj.data[i].author, obj.data[i].text, obj.data[i].color, new Date(obj.data[i].time));
			}
		} else if (obj.type == "message") {
			addMessage(data.data.author, data.data.text, data.data.color, new Date(data.data.time));
		} else if (obj.type === "color") {
			color = obj.data;
		}
	};
	// 4. La estructura del objeto enviado por el servidor es la siguiente:
	//      {
	//          // Contiene el tipo de mensaje recibido
	//          type : @string in ['color', 'history', 'message'],
	//          // Contiene los datos según el tipo de mensaje recibido
	//          data: @Object {author, text, color, time}
	//      }
	// 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

	/**
	 * Añadir el mensaje a la ventana de chat
	 */
	function addMessage(author, message, color, dt) {
		content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' + +(dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
	}

}); 