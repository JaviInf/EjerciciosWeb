$(document).ready(function() {
	
	
	//Establecer el valor del elemento input igual al valor del elemento label;
	console.log("Establecer el valor del elemento input igual al valor del elemento label;");
	//var $input=$('#main #search input:first');
	var $label=$('#main #search label[for="q"]');
	var $input=$label.next(".input_text");
	$input.val($label.text());

	//$('input:first').val($('label[for="q"]').text());
	//Añadir la clase "hint" al elemento input;
	console.log("//Añadir la clase hint al elemento input;");
	$input.addClass('hint');

	//Remover el elemento label;
	console.log("Remover el elemento label;");
	$label.remove();

	//Vincular un evento focus en el input para remover el texto de sugerencia y la clase "hint";
	console.log("Vincular un evento focus en el input para remover el texto de sugerencia y la clase hint;");
	$input.on('focus', function(e) {
	$(this).val("").removeClass("hint");
		});

	//Vincular un evento blur en el input para restaurar el texto de sugerencia y la clase "hint" en caso que no se haya ingresado algún texto.
	console.log("Vincular un evento blur en el input para restarturat el texto de la sugerencia y la clase hint")
	$input.on('blur', function(e) {
		if(this.value.length===0)
		$(this).val($label.text()).addClass('hint');
			});

});