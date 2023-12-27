$(document).ready(function() {

    /*$("#tercera").parent().css({

        background: "#1b3d82"
    }); //Encadenar

    */

    //$("#tercera").parents(); //Devuelve hasta la etiqueta html

    //$("#padre").children().fadeOut(500); //Regresa todos

    //$("#padre").children("#tercera").fadeOut(500);

    //$("#contenedor").find("div.caja").slideUp(); //Busca dentro de todos los niveles

    //$("#tercera").siblings().fadeOut(1500);

    /*$("#tercera").prev().css({

        background: "#000"
    });*/

    /*$("#tercera").next().css({

        background: "#000"
    });*/

    $("#tercera").nextAll().css({

        background: "#000"
    });

    $("#tercera").prevAll().css({

        background: "#000"
    });

});