/**
 * @author iMac 9
 */
window.$ = function(selector) {
	return document.querySelectorAll(selector);
		}
window.onload = function() {
	 var nombre = $('#login')[0];
	 var envia = $('#comprobar')[0];
	 var disponibilidad=$('#disponibilidad')[0];
	 var formulario = new AJAX();
	 var mostrarError = function(error) {
		 console.log(error);
	 }
	var mostrarResultado = function(texto) {
			 disponibilidad.innerHTML=texto;
	 } 
	var enviame= function (e){
		e.preventDefault();
		if(nombre.value.length>0) {
			formulario.post({
					url : "http://localhost/~imac9/AJAX/ej03/servidor/compruebaDisponibilidad.php",
					data: {
						nombre : nombre.value,
						nocache : Math.random()},
					success : mostrarResultado,
					error : mostrarError
				});	
			}
			else {
				alert("Debe introducir los datos de usuario");
			}
		}
		 envia.addEventListener('click', enviame);	
}
