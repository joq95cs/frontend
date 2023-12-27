$(document).ready(function() {

    //$(selector).animate({objeto}, velocidad, callback);

    $("#boton").on("click", function() {

        $("#caja").animate({

            //width: "300px,"
            //opacity: "0.2,"
            //width: "+=300px",
            //margin: "20px"
            //marginLeft: "+=120px"

            //NO funcionan las animaciones de color

            marginLeft: "+=50px"
        }, 300, function() {

            //alert("Fin de la animación");
        });

        $("#caja").animate({

            marginLeft: "-=50px"
        }, 300);

        //$("#caja").toggleClass("animacion");
    });
});