/**
 * @author iMac 9
 */

var esPalindromo= function(cadena){
	console.log("Palabra a analizar: "+cadena);
	var normal="";
	var alreves="";
	
	for(var i=0; i<cadena.length; i++){
		if(cadena.charAt(i)!=" ") normal=normal+cadena.charAt(i).toUpperCase();
	}
	
	for( l=cadena.length; l>=0; l--){
		if(cadena.charAt(l)!=" ") alreves=alreves+cadena.charAt(l).toUpperCase();
	}
	// console.log(normal);
	// console.log(alreves);
	if(normal==alreves) return("Si es palindroma");
	else return("No es palindroma");
}

console.log("Caso de uso de palabra palindroma: " + esPalindromo('Hola'));
console.log("");
console.log("Caso de uso de palabra palindroma: " + esPalindromo('aba'));
console.log("");
console.log("Caso de uso de palabra palindroma: " + esPalindromo('La ruta nos aporto otro paso natural'));
