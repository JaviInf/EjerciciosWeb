$(document).ready(function() {

	var FormDetails = {
		nombre : '',
		apellido : '',
		email : '',
		password : '',
		provincia : '',
		sexo : '',
		comentarios : '',
		acepto : ''
	};
	
	var form={}// objeto vacio

	$('form :input').on('blur', function(e) {
		$this = $(this);
		// lo guardo en el objeto
		form[this.name]=$this.val();
		sessionStorage.setItem($this.attr('name'), JSON.stringify($this.val()));
		localStorage.setItem($this.attr('name'), JSON.stringify($this.val()));
	});

	function carga() {
		var $lista = $('form :input');
		for (var f = 0; f < sessionStorage.length; f++) {
			var clave = sessionStorage.key(f);
			var valor = sessionStorage.getItem(clave);
			$lista.each(function(idx, el) {
				$this = $(this);
				if ($this.attr('name') == clave) {
					$this.val(valor);
				}
			});
		}
	}
	// var actualizar= function(e){
		// form=parseJSON(e.storageArea.getItem("form"))
		// for (key in form){
			// $("#[name" + key).val(form[key]);
		// }
	// }
	
	function cargalocal() {
		var $lista = $('form :input');
		for (var f = 0; f < localStorage.length; f++) {
			var clave = localStorage.key(f);
			var valor = localStorage.getItem(clave);
			$lista.each(function(idx, el) {
				$this = $(this);
				if ($this.attr('name') == clave) {
					$this.val(valor);
				}
			});
		}
	}


	window.addEventListener('load', carga);
});
