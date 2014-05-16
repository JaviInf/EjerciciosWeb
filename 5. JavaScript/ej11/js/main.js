/**
 * @author iMac 9
 */

var Persona = function (nombre, edad)  {
	this.nombre= nombre || "Javi";
	this.edad= edad || 27;
	// this.genero= genero || "indefinido";
	this.obDetalles= function(){
		return ("nombre: "+nombre+", edad: "+edad);// cada Estuadinte tiene la suya y la ke hereda de Persona, si la borro sigue estando, si la meto como opcion2 si 
	}
}

//opcion2 fuera necesario prototype comun para todos, lo brro en todos o mododifico

// var obDetalles = function(){
	// return "nombre: "+this.nombre + ", edad: "+this.edad);
// }
// 
// Persona.prototype.obDetalles=obDetalles;


var Estudiante = function(nombre, edad, curso, grupo) {
	this.curso=curso || "sin especificar";
	this.grupo=grupo ||"sin especificar";
	Persona.call(this, nombre, edad);// llamar al padre  this.nombre this.edad
	this.registrar=function(){
		return ("funcion registrar");
	}
}


Estudiante.prototype = new Persona;

var Profesor= function(nombre, edad, asignatura, nivel){
	// this.base = Persona;
	// this.base(nombre, edad, genero);
	Persona.call(this, nombre, edad);
	this.asignatura=asignatura || "so";
	this.nivel= nivel || "avanzado";
	this.asignar=function(){
		console.log("funcion asignar");
	}
}
Profesor.prototype= new Persona();



var alum= new Estudiante('Javi', 27, 'masculino');
console.log(alum.obDetalles());
// si hago un delete obDetalles en alum y alum2.obtendetalles
var alum2= new Estudiante('Pedro',98,'wew');
console.log(alum2.obDetalles());

// var prof= new Profesor()

