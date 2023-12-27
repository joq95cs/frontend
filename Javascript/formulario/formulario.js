(function() {

    var formulario = document.getElementById("formulario"),
    nombre = formulario.nombre, //Accedemos por su name
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById("error");

    function validarNombre(e) {

        if(nombre.value == "" || nombre.value == null) {

            console.log("Completa el nombre");
            error.style.display = "block";
            error.innerHTML += "<li>Por favor completa el nombre</li>";
            e.preventDefault();

        } else {

            error.style.display = "none";
        }
    }

    function validarCorreo(e) {

        if(correo.value == "" || correo.value == null) {

            console.log("Completa el correo");
            error.style.display = "block";
            error.innerHTML += "<li>Por favor completa el correo</li>";
            e.preventDefault();

        } else {

            error.style.display = "none";
        }

    }

    function validarSexo(e) {

        if(sexo.value == "" || sexo.value == null) {

            console.log("Completa el sexo");
            error.style.display = "block";
            error.innerHTML += "<li>Por favor completa el sexo</li>";
            e.preventDefault();

        } else {

            error.style.display = "none";
        }

    }

    function validarTerminos(e) {

        if(terminos.checked == false) {

            console.log("Acepta los términos");
            error.style.display = "block";
            error.innerHTML += "<li>Por favor acepta los términos</li>";
            e.preventDefault();

        } else {

            error.style.display = "none";
        }
    }

    function validarFormulario(e) {

        error.innerHTML = "";
        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
    }

    formulario.addEventListener("submit", validarFormulario);


}());