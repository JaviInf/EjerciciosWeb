$(document).ready(function() {
	
	$('#blog h3').each(function(idx, el) {
		var $this=$(this);// tengo los h3
		var $target=$('<div/>').insertAfter($this);
		$this.data('target', $target);
	}).on('click', function(e){
		e.preventDefault();
		$this=$(this);
		var $div = $this.data("target");
		var $href=$this.find('a').attr('href');
		var tempArray = $href.split('#');
		var id = '#' + tempArray[1];
		console.log("http://localhost/~imac9/jQuery/data/blog.html"+id);
	//	$div.load("http://localhost/~imac9/jQuery/data/blog.html"+id);
		
		$.get('data/blog.html', function(html){
			var $html=$(html);
			console.log($html.filter(id).html());
			$this.data('target').html($html.filter(id).html());
		});
	});

});


// $div.load("http://www.arkaitzgarro.com/jquery/data/blog.html"+id);