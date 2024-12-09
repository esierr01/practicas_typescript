console.log("Hello World!");
let myString:string = "Hola Mundo";
console.log(myString);
myString = 22 + "Prueba";
console.log(myString);
console.log(typeof(myString));
let myNumber:number = 24;
console.log(myNumber);
let myBoolean:boolean = true;
console.log(myBoolean);
let myVariable:any = "Texto";
myVariable = 17;
myVariable = false;
let texto:string = "<h3>Hola soy Emmanuel</h3>"
let texto2:string ="<p>Esto es una prueba para colocar un parrafo con texto</p>"

let doc:HTMLElement | null = document.querySelector("#documento");

doc.innerHTML = texto;
doc.innerHTML += texto2;

// Escribir en DOM
// document.write(myString+"<br>");
// document.write(myVariable);

// Arrays
/*
let stringArray: any[] = ["jorge", "pedro", "luis"];
doc.innerHTML += stringArray;
stringArray = [123, 234, true];      // puedo cambiar el tipo de datos en el arreglo porque lo defini como any
doc.innerHTML += "<br>";
doc.innerHTML += stringArray;
*/
let stringArray: string[] = ["item1", "item2", ""];
doc.innerHTML += stringArray;
doc.innerHTML += "<br>";

let numberArray2: number[] = [123, 673, 1029];
doc.innerHTML += numberArray2;
doc.innerHTML += "<br>";

let cualquiertipo: any[] = [234, "Texto", true, ["julio", 118, false], 18];
doc.innerHTML += cualquiertipo;

// Un arreglo variado pero fijo - tuple
let strinnumbTuple: [string, number];
//strinnumbTuple = [22, "lklk"];  // si lo cargamos con valores así, da error.
strinnumbTuple = ["hello", 981];    // así si esta correcto

// tipos de datos comunes en js
// void, undefined, null

