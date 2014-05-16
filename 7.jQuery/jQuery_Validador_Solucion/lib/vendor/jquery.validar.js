(function($) {

  var validaciones = {
      required : function(valor) {
          return !( valor === null || valor.length === 0 || /^\s+$/.test(valor) );
      },
      email : function(valor) {
          var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
          return filter.test(valor);
      },
      url : function(valor) {
          var filter = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
          return filter.test(valor);
      },
      number : function(valor) {
          return $.isNumeric(valor);
      },
      password : function(valor) {
          var may = /[A-Z]/;
          var min = /[a-z]/;
          var dig = /[0-9]/;
          return (valor.length > 6) && may.test(valor) && min.test(valor) && dig.test(valor);
      },
      max : function(valor, maximo) {
          return valor.length <= maximo;
      }
  };
  
  var validarFormulario = function(e) {
    var $this = $(this),
        errores = [];

    $this.find(':input').not(':checkbox').each(function(){
      if(!validarCampo.call(this)) {
        var data = {
          error = e.data.opts.error;
        };
        errores.push(this, {data : data});
      }
    });

    if(errores.length > 0) {
      e.preventDefault();
    } else {
      // Llamada AJAX
    }
  }

  var validarCampo = function(e) {
    var $campo = $(this);

    if($campo.hasClass('required')) {
      if(!validaciones.required($campo.val())) {
        mostrarError(e.data.error.requerido, $campo);
        return false;
      }
    }

    return true;
  }

  var mostrarError = function(msg, $campo) {
    var $target = $.data($campo[0], 'target');

    if(!$target || $target.length === 0) {
      $target = $('<span/>')
                  .addClass('field_error')
                  .after($campo);

      $.data($campo[0], 'target', $target);
    }

    $target.text(msg);
  }

  $.fn.validar = function(options) {

    var opts = $.extend({}, $.fn.validar.defaults, options);
    // se iteractua y formatea cada elemento
    return this.filter('form').each(function() {
      var $this = $(this);

      $this.on('submit', {opts : opts}, validarFormulario)
           .find(':input').not(':checkbox').on('blur keyup', {opts : opts}, validarCampo).end()
           .find(':checkbox').on('click', {opts : opts}, validarCampo);
      
    });
  };
  
  $.fn.validar.defaults = {
    error : {
          requerido : "Este campo es requerido",
          email : "Este campo debe ser un email",
          password : "Este campo debe ser un password",
          url : "Este campo debe ser una url"
      }
  };
})(jQuery);

// $("#registro").validar();