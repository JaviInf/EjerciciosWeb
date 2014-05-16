var AJAX = (function(){

	// Variables de clase privadas
	READY_STATE_UNINITIALIZED=0;
	READY_STATE_LOADING=1;
	READY_STATE_LOADED=2;
	READY_STATE_INTERACTIVE=3;
	READY_STATE_COMPLETE=4;

	var req = null;
	// Constructor
	var AJAX = function() {

		// inicializa variables de cada instancia

		this.url = null;
		this.data = null;
		this.method= 'GET';
		this.onsuccess = function (){};
		this.onerror = function(){};
		req = initHTTPRequest();
		}
		
		var initHTTPRequest=function (){
			return (window.ActiveXObject)?
			new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		}
	
		var onReadyState = function() {
			if (peticion_http.readyState == 4) {
				if (peticion_http.status == 200) {
					this.onsuccess(peticion_http.responseText);
				}
				else{
					this.onerror(req);
				}
			}
		}
		
		AJAX.prototype.get=function(option) {// le paso un objeto
			//This referencia a objeto ajax
			this.method='GET';
			this.url=(options && options.url) || "http://localhost/";
			//me aseguro que existe
			this.data = (options && options.data) || null;
			this.onsuccess = (options && options.success) || this.onSuccessDefault;
			this.onerror = (options && options.error) || this.onErrorDefault;
			
			var that=this;
			
			req.onreadystatechange = function() {
				onReadyState.call(that);
			}
			
			peticion_http.open(this.method, this.url+'?nocache='+Math.random(), true);
			peticion_http.send(this.data);
		}

return AJAX;

})();

	


		

		
