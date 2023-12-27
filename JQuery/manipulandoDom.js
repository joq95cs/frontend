$(document).ready(function() {

    //$("#titulo").text("Encabezado modificado");

    $("#titulo").html("<u>Encabezado subrayado</ul>"); //Permite agregar etiquetas html

    var nombre = $("#nombre");
    nombre.on("change", function() {

        $("#titulo").text(nombre.val());
    });

    $("#enlace").text("Joqsan Castellanos");
    $("#enlace").attr("href", "http://www.jw.org");

    $("#enlace").attr( {

        "class": "azul",
        "target": "_blank"
    });
});