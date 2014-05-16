var validaciones = (function() {
    // Objeto que contiene los metodos validadores
    var validaciones = {
        required : function(valor) {
            if( valor === null || valor.length === 0 || /^\s+$/.test(valor) ) {
              return false;
            }
            return true;
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

    return validaciones;
})();