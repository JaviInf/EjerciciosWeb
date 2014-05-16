$(document).ready(function() {
	//estado actual

	var page=0;
	var data = [
		{	pag:1,
			direccion: "pagina1.html",
			titulo : "Titulo pagina 1",
			contenido : "contenido de pagina 1."
		},
		 {
		 	pag:2,
			direccion: "pagina2.html",
			titulo : "Titulo pagina 2",
			contenido : "contenido de pagina 2."
		},
		 { pag:3,
			direccion: "pagina3.html",
			titulo : "Titulo pagina 3",
			contenido : "contenido de pagina 3."
		}
	];

	var statePag1 = {
		direccion : "pagina1.thml",
		titulo : "Titulo nuevo",
		contenido : "Nuevo contenido"
	};

	var statePag2 = {
		direccion : "pagina2.thml",
		titulo : "Titulo nuevo 2",
		contenido : "Nuevo contenido 2"
	};

	$('.derecha').on('click', function(e) {
		page++;
		history.pushState(data[page], data[page].titulo, data[page].direccion);
		// history.forward();
		console.log(history.state);

	});

	$('.izquierda').on('click', function(e) {
		page--;
		history.pushState(data[page], data[page].titulo, data[page].direccion);
	});


	window.onpopstate = function(event) {
		console.log(document.location + ", state: " + JSON.stringify(event.state));
		if(event.state){
			actualizarVista(event.state);
		}
		else actualizarVista(content[0]);
	};


});
