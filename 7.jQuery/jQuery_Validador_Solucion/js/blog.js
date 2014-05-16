$(document).ready(function() {
	
//Al hacer click en alguno de los titulares del div #blog, se debe mostrar el párrafo 
//correspondiente con un efecto de deslizamiento;
	// var $h3=$('#blog h3');
	// $h3.on('click', 'a', function(e){
		// e.preventDefault();
		// var $this=$(this);
		// $this.parent().siblings('.except:hidden').slideDown();
		// $('#blog .except:visible').slideUp();
	var $blog=$('#blog');
	$blog.find('h3').on('click', function(e){
		$h3=$(this);
		e.preventDefault();
		var $parrafo=$h3.next('p');
		$parrafo.slideDown();
		// Al hacer click en otro titular, se debe ocultar el párrafo mostrado con un efecto de 
// deslizamiento y mostrar nuevamente el párrafo correspondiente también con un efecto de 
// deslizamiento. Ayuda: No se olvide de utilizar el selector :visible.
		$h3.parent().siblings()
                .find('p:visible').slideUp();	
	})

});