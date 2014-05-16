(function($){
  $.fn.stripe = function(color) {
  	var c=color || "yellow";
      return this.find('tbody tr:odd').each(function(){
          $(this).css({
          	backgroundColor:color
          });
      });
  };
})(jQuery);
 

// Ejemplo de utilización:
$('#fruits').stripe('#cccccc');

// (function($) {
  // $.fn.stripe1 = function(options) {
    // var opts = $.extend({}, $.fn.stripe1.defaults, options);
    // return this.find('tbody tr:odd').each(function(){
      // $this = $(this);
      // var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
      // $this.css({
        // backgroundColor: o.background,
      // });
    // });
  // };
//   
//   
  // $.fn.stripe1.format = function(txt) {
    // return '<strong>' + txt + '</strong>';
  // };
//  
  // $.fn.stripe1.defaults = {
    // background: 'yellow'
  // };
// 
// })(jQuery);
// $('#fruits').stripe1();