/**
 * @author iMac 9
 */

//fecha
var fecha = /^\d{2}\/\d{2}\/\d{2,4}$/;
console.log("26/02/1986"+fecha.test("26/02/1986"));
console.log("Nací el 05/04/1982 en Donostia"+fecha.test("Nací el 05/04/1982 en Donostia"));
var fecha2=/^(0[1-9]|[1-2][0-9]|3[0-1])[\/-](0[1-9]|1[0-2])[\/-]\d{2,4}$/

//email
var email= /^[a-zA-Z][\w\.]*\@\w*\.\w{2,3}$/;
console.log("abc@bv"+email.test("abc@bv"));
console.log("abc@bv.com"+email.test("abc@bv.com"));
console.log("ab_c@bv.com"+email.test("ab_c@bv.com"));
console.log("_ab_c@bv.com"+email.test("_ab_c@bv.com"));


//filtrar
var character = {
	'&' : '&amp;',
	'\\': '&quot;',
	'<' : '&lt;',
	'>' : 'gt;'};
var prueba="<&&>";
var solucion=prueba.replace(/[&\<>]/g, function (c){
	return character[c];
	
});
console.log(solucion);


//reverse
var re=/(\w+)\s(.+)/;
console.log("john smith".replace(re,"$2, $1"));
console.log("john smith perez".replace(re,"$2, $1"));
console.log("john".replace(re,"$2, $1"));

