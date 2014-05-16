/**
 * @author iMac 9
 */

var tipoCadena = function(cadena){
	var Mayus=false;
	var Minus=false;
	var Mezcla=false;
	
	console.log(cadena);
	for (var i=0; i<cadena.length; i++){
		var letra=cadena.charAt(i);
		var letraMayus=letra.toUpperCase();
		if(letra==letraMayus) Mayus=true;
		else Minus=true;
	}
	if(Mayus && Minus) return "Mezcla de mayusculas y minusculas";
	else if (Mayus && !Minus) return "Solo mayuscula";
	else if(!Mayus && Minus) return "Solo minusculas";
}

console.log("Caso de prueba Todo Mayusculas: " + tipoCadena('HOLA'));

console.log("");
console.log("Caso de prueba Todo Minusculas: " +tipoCadena('adios'));

console.log("");

console.log("Caso de prueba Todo Minusculas: " +tipoCadena('AbCdsE'));