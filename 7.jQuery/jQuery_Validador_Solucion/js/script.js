var $ = function(selector) {
    var e = document.querySelectorAll(selector);
    return (e.length == 1)? e[0] : e;
};

function Validaciones(){}

Validaciones.prototype.obligatorio = function(valor) {
    if( valor === null || valor.length === 0 || /^\s+$/.test(valor) ) {
      return false;
    }
    return true;
};

Validaciones.prototype.obligatorios = function() {
    for (var i = 0; i < arguments.length; i++) {
        if(!this.obligatorio(arguments[i])) return false;
    }
    return true;
};

Validaciones.prototype.email = function(valor) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return filter.test(valor);
};

Validaciones.prototype.password = function(valor) {
    var may = /[A-Z]/;
    var min = /[a-z]/;
    var dig = /[0-9]/;
    return (valor.length > 6) && may.test(valor) && min.test(valor) && dig.test(valor);
};

Validaciones.prototype.max = function(valor, maximo) {
    return valor.length <= maximo;
};

window.onload = function() {
    var validar = function(e){
        var valido = true;
        var errores = [];

        validaciones = new Validaciones();

        var $nombre      = $("#registro_nombre").value;
        var $email       = $("#registro_email").value;
        var $password    = $("#registro_password").value;
        var $comentarios = $("#registro_comentarios").value;
        var $acepto      = $("#registro_condiciones").checked;

        try {
            if(!validaciones.obligatorio($nombre)) {
                errores.push("El nombre es obligatorio.");
            }
            if(!validaciones.email($email)) {
                errores.push("El email no es una dirección válida.");
            }
            if(!validaciones.password($password)) {
                errores.push("El password no es válido.");
            }
            if(!validaciones.obligatorio($comentarios)) {
                errores.push("Los comentarios son obligatorios.");
            } else {
                if(!validaciones.max($comentarios, 50)) {
                    errores.push("Los comentarios no deben superar los 50 caracteres.");
                }
            }
            if(!$acepto) {
                errores.push("Debes aceptar las condiciones del servicio.");
            }

            if(errores.length > 0) {
                alert("Se han producido los siguientes errores:\n - "+errores.join("\n - "));
                e.preventDefault();
            }
        } catch(ex) {
            console.log(ex);
            e.preventDefault();
        }
    };

    var validaCampo = function() {
        validaciones = new Validaciones();

        switch(this.id){
            case "registro_nombre":
                if(!validaciones.obligatorio(this.value)) {
                    alert("El nombre es obligatorio.");
                }
                break;
            case "registro_email":
                if(!validaciones.email(this.value)) {
                    alert("El email no es una dirección válida.");
                }
                break;
            case "registro_password":
                if(!validaciones.password(this.value)) {
                    alert("El password no es válido.");
                }
                break;
            case "registro_comentarios":
                if(!validaciones.obligatorio(this.value)) {
                    alert("Los comentarios son obligatorios.");
                }

                if(!validaciones.max(this.value, 50)) {
                    alert("El número máximo de caracteres es 50.");
                }
                break;
        }
    };

    $("#registro").addEventListener('submit', validar, false);
    $("#registro_nombre").addEventListener('blur', validaCampo, false);
    $("#registro_email").addEventListener('blur', validaCampo, false);
    $("#registro_password").addEventListener('blur', validaCampo, false);
    $("#registro_comentarios").addEventListener('blur', validaCampo, false);
};