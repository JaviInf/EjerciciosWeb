 $(document).ready(function() {
 	
	
	 var $divs=$('div.module').hide();
	 var $lista=$('<ul/>')
						 .attr('id','menu')
						 .addClass('tabs')
						 .text('Navegacion');
	$lista.insertBefore($('div.module:first'));

	
	 $divs.each(function(e){
		 var $h2=$(this).find('h2').text();
		 var $li=$('<li/>')
						 .text($h2)
						.data('target', $(this));
		 $lista.append($li);
	 });
	
	 $lista.insertBefore($divs.first());
 
	
	 $lista.on('click','li', function(e){
		 var $this=$(this);
		 $this.addClass('current');
		 $this.siblings().removeClass('current');
	
		 var $div = $this.data("target");
		 $div.show()
					.siblings('.module').hide();
	 });

   $lista.children().first().addClass('current');
  $divs.first().show();
 });


