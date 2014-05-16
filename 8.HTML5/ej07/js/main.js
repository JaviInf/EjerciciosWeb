var pizarra_canvas
var pizarra_context


function init(){
	
		pizarra_canvas = document.getElementById("pizarra");
		pizarra_context = pizarra_canvas.getContext("2d");
		pizarra_context.strokeStyle = "#000";
		pizarra_canvas.addEventListener("mousedown",empezarPintar,false);
		pizarra_canvas.addEventListener("mouseup",terminarPintar,false);
}
	
function empezarPintar(e){
	pizarra_context.beginPath();
	pizarra_context.moveTo(e.clientX-pizarra_canvas.offsetLeft,e.clientY-pizarra_canvas.offsetTop);
	pizarra_canvas.addEventListener("mousemove",pintar,false)
}

function terminarPintar(e){
	pizarra_canvas.removeEventListener("mousemove",pintar,false);
}
	
function pintar(e) {
	pizarra_context.lineTo(e.clientX-pizarra_canvas.offsetLeft,e.clientY-pizarra_canvas.offsetTop);
	pizarra_context.stroke();
}
	

function borrar(){
	pizarra_canvas.width = pizarra_canvas.width;
}
