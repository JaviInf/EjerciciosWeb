window.onload = function() {
window.$ = function (selector){
	   			return document.querySelectorAll(selector);
}
// var envia= S('#envia');
document.getElementById('enviar').addEventListener('click', cargarContenido);
var contenido=document.getElementById('contenidos');
var cabecera=document.getElementById('cabeceras');
var estados=document.getElementById('estados');
var codigo=document.getElementById('codigo');

var url=document.URL;
document.getElementById('recurso').value=url;  


function cargarContenido() {
  // Obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // Preparar la funcion de respuesta
  peticion_http.onreadystatechange = muestraContenido;
 
  // Realizar peticion HTTP
  peticion_http.open('GET', url, true);
  peticion_http.send(null);
}
 var muestraContenido=function() {
 	estados.innerHTML=peticion_http.readyState;
    if(peticion_http.readyState == 4) {
      if(peticion_http.status == 200) {
        contenido.innerText=peticion_http.responseText;
       	codigo.innerHTML =peticion_http.status;
        cabecera.innerHTML=peticion_http.getAllResponseHeaders();// =peticion_http.statusText;
        
        
      }
    }
  }





 


}