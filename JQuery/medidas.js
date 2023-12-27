$(document).ready(function () {

    var titulo = $("#titulo");
    var info = $("#info");

    //console.log(titulo.width());

    info.append("Ancho: " + titulo.width() + "<br>");
    info.append("Ancho interno: " + titulo.innerWidth() + "<br>"); //Incluye padding
    info.append("Ancho externo: " + titulo.outerWidth() + "<br>"); //Incluye border
    info.append("Ancho externo con margin: " + titulo.outerWidth(true) + "<br>");

    info.append("Alto: " + titulo.height() + "<br>");
    info.append("Alto interno: " + titulo.innerHeight() + "<br>");
    info.append("Alto externo: " + titulo.outerHeight() + "<br>");
    info.append("Alto externo con margin: " + titulo.outerHeight(true) + "<br>");
});