/**
 * @author iMac 9
 */

var comprobarDNI = function (dni){
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var numDNI;
	var letraDNI;
	var dni;

	letraDNI = dni.charAt(dni.length-1);
	console.log("letra dni: "+letraDNI);
	//var num=Parseint(dni)
	numDNI = dni.substring(0,8);
	console.log("numero dni: "+numDNI);
	if(numDNI<0 && numDNI>999999999){
		console.log("Numero de dni NO VALIDO"+dni);
		
	}
	else {
		var letra = numDNI % 23;
		// console.log("letra calculada: " +letras[letra]);
		if(letras[letra]==letraDNI.toUpperCase()){
			console.log("Letra y DNI son correctos");
		}
		else {
			console.log("Letra o DNI No son correctos");
		}
	}	
}


//Casos de prueba
console.log("");
console.log("CASO numero negativo");
comprobarDNI('-44560211B');

//numero mayor
console.log("");
console.log("CASO numero mayor");
comprobarDNI('999999999B');

// numero correcto letra incorrecta
console.log("");
console.log("CASO letra incorrecta");
comprobarDNI('44560211N');

//numero correcto letra correcta
console.log("");
console.log("CASO todo correcto");
comprobarDNI('44560211B');