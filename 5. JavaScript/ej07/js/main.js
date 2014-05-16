/**
 * @author iMac 9
 */

var factorial=function(numero){
	var suma=1;
	for (var i=2; i<=numero; i++){
		suma=suma*i;
	}
	return suma;
}

//llamada a la funcion
console.log("");
console.log("CASO factorial 5: "+ factorial('5'));
// factorial('5');