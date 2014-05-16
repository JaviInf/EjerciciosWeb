$(document).ready(function() {
	
	var $form=$('#specials form');
	var $target=$('<div/>').insertAfter($form);
	
	$form.find('select').on('change', function(e){
		$.ajax({
   			url : 'http://query.yahooapis.com/v1/public/yql',
    		jsonp : 'callback',
    		dataType : 'jsonp',
 
    // se le indica al servicio de YQL cual es la información
    // que se desea y que se la quiere en formato JSON
   	 		data : {
        	q : 'select title,abstract,url from search.news where query="cat"',
        	format : 'json'
   	 		},
 
    		success : function(response) {
        			console.log(response);
    		}
		});
	});
	
});