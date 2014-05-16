/**
 * @author iMac 9
 */
var valores = [true, 5, false, "hola", "adios", 2];
var cadenas=[], numeros=[], booleanos=[];

// for( i in valores){
	// if(typeof valores[i]=='number'){
		// numeros.push(valores[i]);
	// }
	// if(typeof valores[i]=='string'){
		// cadenas.push(valores[i]);
	// }
	// if(typeof valores[i]=='boolean'){
		// booleanos.push(valores[i]);
	// }
// }
for(i in valores){
	switch (typeof valores[i]){
		case "string": cadenas.push(valores[i]);break;
		case "boolean": booleanos.push(valores[i]);break;
		case "number": numeros.push(valores[i]);break;	
	}
}
// visualizo los tres array
	for(i in numeros){
		console.log("numeros: "+numeros[i]);
	}
	for(i in booleanos){
		console.log("booleanos: "+booleanos[i]);
	}
	for(i in cadenas){
		console.log("cadenas: "+cadenas[i]);
	}
// 1
var mayor='0';

for(i in cadenas){
	if(cadenas[i].length > mayor.length){
		mayor=cadenas[i];
	}
}
console.log("cadena mayor: "+mayor);

//2
console.log(true && !false);
console.log(!true && false);

//3
console.log("Multiplicacion: "+ (numeros[0]*numeros[1]));
console.log("Division: "+ (numeros[0]/numeros[1]));
console.log("Suma: "+ (numeros[0]+numeros[1]));
console.log("Resta: "+ (numeros[0]-numeros[1]));
console.log("Resto entero: "+ (numeros[0]%numeros[1]));


