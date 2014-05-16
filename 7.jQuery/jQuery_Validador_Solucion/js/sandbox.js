// $(document).ready(function() {
  // console.log('el documento está preparado');
// 
	// //Seleccionar todos los elementos div que poseen la clase "module".
	// console.log($('div.module'));
// 	
	// // //Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?
//  	
	// console.log($('#myList li:eq(2)')); //console.log($('#myList li').eq(2));
	// console.log($('#myList').find('li').eq(2));
	// console.log($( "#myList li:nth-of-type(3)"));
	// console.log($('#myList li:nth-child(3)'));
// 	
	// // //Seleccionar el elemento label del elemento input utilizando un selector de atributo.
	// console.log($("label[for='q']"));
	// // var $input=$('input #id');
	// // var $label("label[for='"+$input.attr(()+']"]);
// 	
	// // //Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
	// console.log($(':hidden').length);
//  
	// // //Averiguar cuantas imágenes en la página poseen el atributo alt.
	// console.log($('img[alt]').length);
//  
	// // //Seleccionar todas las filas impares del cuerpo de la tabla.
	// console.log($('tr:even'));
	// console.log($('#fruits tbody tr:even'));
// 	
// 	
	// //1 Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
	// $('img').each(function(idx, el){
		// console.log(
			// $(el).attr('alt')
			// );
			// console.log(el.alt);
		// });
// 	
	// });
// 	
	// //2Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
	// // $("input[for='q']").parent().addClass("claseNueva");
	// // $("input[for='q']").closest("form").addClass("claseNueva");
	// $("form input:first-of-type").closest("form").addClass("clasenueva");
// 	
	// //Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
	// $('#myList li.current').removeClass("current").next().addClass("nueva");
// 	
	// //4Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
	// //$('#specials select[name="day"]').siblings().first();
	// $('#specials select[name="day"]').closest("form").find("input[type='submit']");
	// //$('#specials select[name="day"]').parent().next().children().eq(0);
// 	
	// // Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current" al mismo y luego añadir la clase "disabled" a los elementos hermanos.
	// //$('#slideshow').first().addClass("current").siblings().addClass("disabled");
	// $('#slideshow :first-child').addClass("current").siblings().addClass("disabled");
// 	
// 	
// 	
// 	
// 	
	// // Añadir 5 nuevos ítems al final de la lista desordenada #myList.
	// console.log("Añadir 5 nuevos ítems al final de la lista desordenada #myList.")
	// var myItems = [], $myList = $('#myList');
	// for (var i=0; i<4; i++) {
    	// myItems.push('<li>item' + i + '</li>');
	// }
//  
	// $myList.append(myItems.join(''));
// 	
	// //Remover los ítems impares de la lista.
	// console.log("Remover los items impares de la lista")
	// $('#myList li:even').remove();
// 
	// //Añadir otro elemento h2 y otro párrafo al último div.module.
	// console.log("Añadir otro elemento h2 y otro parrador al ultimo div.module");
	// $('div.module:last').append('<h2>nueva cabecera</h2>')
    // .append('<p>nuevo parrafo</p>');
   // // $titulo.appendTo($("div module:last"));
// 
	// //Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday".
	// console.log('Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday".');
	// $('select').append('<option value="wednesday">Wenesday</option>');
// 
	// //Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.
	// console.log("Añadir un nuevo div module a la pagina despues del ultimo, luego añadir una copoa de ina de las imagenes existentes dentro del nuevo div");
	// // var $imagen = $('#slideshow img:first');
	// //var $nuevoDiv = $('<div class="module"/>');
	// //$nuevoDiv.append($imagen.clone()).insertAfter('div.module:last');
	// //$nuevoDiv.append($('img:first').clone()).insertAfter('div.module:last');
	// $('<div class="module"/>').append($('#slideshow img:first').clone()).insertAfter('div.module:last');
// 
