$(document).ready(function() {

	// comienzo a arrastrar

	function handleDragStart(e) {
		console.log("comeinzo a arrastrar imagen");
		this.style.opacity = '0.4';
		$('#drop').css({
			"opacity" : "1"
		});
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('Data', this);
		 console.log(this);
	}

	
	function handleDropdrop(e) {
		console.log("arrastrado exitosamente al drop");
		if (e.stopPropagation) {
			e.stopPropagation();			
		}
		return false;
	}
	
	
	function handleDragEnd(e) {
		console.log("operacion finalizada");
		this.style.opacity = '1';
		$('#drop').css({
			"opacity" : "0.4"
		});
		//$('#drop').append(e.target);
	}
	
	
	function handleDragOver(e) {
		console.log("handleDragOver");
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

	
	
	
	function handleDragEnter(e) {
		$('#drop').css({
			'border-color': 'black'
		});
		console.log("Entro en el area de drop");
	}

	//definicion de eventos
	var cols = document.querySelectorAll(' .product img');
	[].forEach.call(cols, function(col) {
		col.addEventListener('dragstart', handleDragStart, false);
		 col.addEventListener('dragend', handleDragEnd, false);
	});
	
	var destino = $('#drop');
	[].forEach.call(destino, function(drop) {
		drop.addEventListener('dragenter', handleDragEnter, false);
		drop.addEventListener('drop', handleDropdrop, false);
		drop.addEventListener('dragover', handleDragOver, false);
		//drop.addEventListener('dragend', handleDragEnd, false);
	});

});
