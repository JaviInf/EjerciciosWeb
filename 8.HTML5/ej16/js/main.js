// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
	// Great success! All the File APIs are supported.
} else {
	alert('The File APIs are not fully supported in this browser.');
}

function handleFileSelect(e) {
	var files = e.target.files;
	// FileList object
	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ', f.size, ' bytes, last modified: ', f.lastModifiedDate.toLocaleDateString(), '</li>');
		console.log(output);
		// Only process image files.
		if (!f.type.match('image.*')) {
			console.log("no es un tipo de fichero imagen");
			continue;
		}
		if(f.size>9000){
			console.log("imagen demasiado pesada");
			continue;
		}
		var reader = new FileReader();
		// Closure to capture the file information.
		reader.onload = (function(theFile) {
			return function(e) {
				// Render thumbnail.
				var span = document.createElement('span');
				span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
				list.insertBefore(span, null);
			};
		})(f);

		// Read in the image file as a data URL.
		reader.readAsDataURL(f);
	}

list.innerHTML = '<ul>' + output.join('') + '</ul>';
}


function handleDrop(e) {
    e.stopPropagation();
    // Stops some browsers from redirecting.
    e.preventDefault();
    console.log("Estoy en el area destino");
 	handleFileSelect(e);
}

function handleDragEnter(e) {
	 e.stopPropagation();
	e.preventDefault();
	console.log("entro en area arrastrado");
   
}


var destino = document.getElementById('imagen');
destino.addEventListener('drop', handleDrop, false);
destino.addEventListener("dragenter", handleDragEnter, false);
		
	
files.addEventListener('change', handleFileSelect, false);
