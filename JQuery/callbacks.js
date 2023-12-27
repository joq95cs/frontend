$(document).ready(function() {

    function saludo() {

        alert("Hola");
    }

    /*$("#ejecutar").on("click", function() {

        $(".caja").slideUp(1000, function() {

            $(this).slideDown(1000, function() {

                alert("Caja mostrada de nuevo");
            });
        });
    });*/

    $("#ejecutar").on("click", function() {

        $(".caja").slideUp(3000);
        alert("Prueba"); //No espera a que la animación se ejecute
        $(".caja").slideDown(3000);
    });
});