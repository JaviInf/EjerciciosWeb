/**
 * @author iMac 9
 */
function esPrimo(numero) {
	p = parseInt(numero);
	var divisores = 2;
	for ( j = 2; j < p; j++) {
		if (p % j == 0) {
			divisores++;
			break;
		}
	}
	if (divisores == 2) {
		return true;
	} else
		return false;
}

var numeros = [];
self.addEventListener('message', function(e) {
	for (var i = 1; i < e.data; i++) {
		if (esPrimo(i)) {
			numeros.push(i);
		}

	}
	// console.log(numeros);
	console.log(numeros);
	postMessage(JSON.stringify(numeros))

}, false);
