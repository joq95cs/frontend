$(document).ready(function() {

    /*$(".caja").first().css({

        background: "#000"
    }); //Regresa la primera caja

    $(".caja").last().css({

        background: "#000"
    });*/

    /*$(".caja").eq(0).css({ //Puedes seleccionar por medio del índice

        background: "#000"
    });

    */

    /*$(".caja").filter("#segunda").css({ //Seleccionamos todas lasa cajas que tengan la clase y el filtro

        background: "#f9a03f"
    });
    */

    $(".caja").not("#segunda").css({ //Es el método contrario a filter
 
        background: "red"
    });
});