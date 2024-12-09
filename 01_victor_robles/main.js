var texto = "Hola Mundo";
var numero = 123;
var falso = false;
var cualquiera = "Cualquier valor";
var nombre = "Emmanuel Sierra";
falso = true;
cualquiera = 1228;
var personas = ["Emmanuel", "Ana", "Diana", "Coco"];
console.log(texto, numero, falso, cualquiera, nombre);
console.log(personas);
var div_personas = document.querySelector("#personas");
// se hace asi, se ve bien, pero si inspeccionamos la pagina, se ve que primero que se crea las etiquetas de apertura y cierre, luego los elementos li, porque estos se tardan mas.
/*
div_personas.innerHTML = "<ul>";
personas.map((persona) => {
    div_personas.innerHTML += `<li>${persona}</li>`;
});
div_personas.innerHTML += "</ul>";
*/
// es mas efectivo hacerlo asi
div_personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li>".concat(persona, "</li>");
    }).join("");
+"</ul>";
// de esta forma, si inspeccionamos se ve que se crea correctamente
