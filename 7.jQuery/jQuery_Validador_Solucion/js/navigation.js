
	// var $this=$(this);// li en cuestion
	// $this.addClasss('hover').find('ul').show()}
// ; function(e)){
	// $this.removeClass('hover')
		// .find('ul')
		// .hide();
// });
// 
// });
$(document).ready(function() {
    $('#nav li').hover(function(e) {
          var $this=$(this);
                $this.addClass('hover')
                .find('ul').show();
        }, function(e) {
            $(this).removeClass('hover')
                .find('ul').hide();
        });
         
});