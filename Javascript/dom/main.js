
//var cajas = document.getElementsByTagName("div");

//cajas[0].textContent = "Hola locos";

//cajas[2].innerHTML = "<b>Soanna La loca<b>";

//var cajas = document.getElementsByClassName("caja");

//cajas[2].innerHTML = "<h2>Holaaaa</h2>";

//var caja1 = document.getElementById("caja1");

//caja1.innerHTML = "<u>Kimera Castle</u>";

//-----CREANDO NODOS

var caja = document.createElement("div");
var texto = document.createTextNode("Mad Material");

caja.appendChild(texto);
//caja.setAttribute("class", "caja naranja");

//var contenedor = document.getElementById("contenedor");

//contenedor.appendChild(caja);

//-----MODIFICANDO NODOS

caja.id = "cajaNueva";
caja.className = "caja naranja";

var cajas = document.getElementsByTagName("div");
var padre = cajas[0].parentNode;

padre.id = "contenedor";

//padre.insertBefore(caja, cajas[3]);

//-----REEMPLAZANDO NODO

padre.replaceChild(caja, cajas[2]);

padre.removeChild(cajas[4]);