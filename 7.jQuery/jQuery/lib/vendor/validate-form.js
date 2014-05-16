(function($) {
    // Objeto que contiene los metodos validadores
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

    var validarCampo = function(e) {
        var $this = $(this);

        // Validar un campo concreto
        if(!e.data.validador($this.val())) {
            // Mostrar el error asociado
            mostrarError.call(this, e.data.error);

            return false;
        } else {
            // Ocultar el error asociado
            ocultarError.call(this);

            return true;
        }
    };

    var mostrarError = function(msg) {
        var $this = $(this);

        $target = $.data(this, 'target');
        if(!$target || $target.length === 0) {
            var $target = $('<span class="fieldspan"/>');
            $.data(this, 'target', $target);
            $this.after($target);
        }

        $this.addClass("fielderror");
        $target.text(msg);
    };

    var ocultarError = function() {
        var $this = $(this);

        $this.removeClass("fielderror");
        var $target = $.data(this, "target");
        $target && $target.remove();
    };

    var validarForm = function(e) {
        var $this = $(this);
        var errores = [];

        $this.find(':input').each(function(){
            var $this = $(this);

            if($this.hasClass('required')) {
                errores.push(
                    !validarCampo.call(this, { data :  { validador : validaciones.required, error : e.data.error.requerido }})
                );
            }
            if($this.hasClass('email')) {
                errores.push(
                    !validarCampo.call(this, { data :  { validador : validaciones.email, error : e.data.error.email }})
                );
            }
            if($this.hasClass('password')) {
                errores.push(
                    !validarCampo.call(this, { data :  { validador : validaciones.password, error : e.data.error.password }})
                );
            }
        });

        $this.find(':checkbox').each(function(){
            var $this = $(this);
            if(!this.checked) {
                mostrarError.call(this);
                errores.push(this);
            }
        });

        if(errores.length > 0) {
            e.preventDefault();
        }
    };

    $.fn.validar = function(options) {

        // Contiene las opciones del plugin
        var opts = $.extend({}, $.fn.validar.defaults, options);

        return this.on('submit', opts, validarForm)
                   .find('.required:input').on('keyup focus', { validador : validaciones.required, error : opts.error.requerido }, validarCampo).end()
                   .find('.email:input').on('keyup focus', { validador : validaciones.email, error : opts.error.email }, validarCampo).end()
                   .find('.password:input').on('keyup focus', { validador : validaciones.password, error : opts.error.password }, validarCampo).end()
                   .find('.url:input').on('keyup focus', { validador : validaciones.url, error : opts.error.url }, validarCampo).end();
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