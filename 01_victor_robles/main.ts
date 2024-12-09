let texto:string = "Hola Mundo";
let numero:number = 123;
let falso:boolean = false;
let cualquiera:any = "Cualquier valor";
const nombre:string = "Emmanuel Sierra";

falso = true;
cualquiera = 1228;

let personas:string[] = ["Emmanuel", "Ana", "Diana", "Coco"];

console.log(texto, numero, falso, cualquiera, nombre);
console.log(personas);

let div_personas:HTMLElement | null = document.querySelector("#personas");

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
                            personas.map((persona) => {
                                return `<li>${persona}</li>`;
                            }).join("");
                            + "</ul>";

// de esta forma, si inspeccionamos se ve que se crea correctamente


