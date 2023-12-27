$(document).ready(function() {

    var boton = $("#boton");

    /*boton.click(function() {

        alert("Hola");
    }); //Lleva un callback cuando el botón es cliqueado

    */

    function saludo() {

        alert("hola");
    }

    //boton.click(saludo);

    //boton.on("click", saludo);

    boton.on("mouseenter", function() {

        document.body.style.background = "#000";
    });

    boton.on("mouseleave", function() {

        document.body.style.background = "#fff";
    });

    boton.on("click", function() {

        alert("Saludos");
    });

    $("#desactivar").on("click", function() {

        boton.off(); //Método para borrar todos los eventos
    });

    $("a").on("click", function(e) {

        e.preventDefault();
        alert("Link desactivado");
    });
});