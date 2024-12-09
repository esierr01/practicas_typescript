console.log("Hello World!");
var myString = "Hola Mundo";
console.log(myString);
myString = 22 + "Prueba";
console.log(myString);
console.log(typeof (myString));
var myNumber = 24;
console.log(myNumber);
var myBoolean = true;
console.log(myBoolean);
var myVariable = "Texto";
myVariable = 17;
myVariable = false;
var texto = "<h3>Hola soy Emmanuel</h3>";
var texto2 = "<p>Esto es una prueba para colocar un parrafo con texto</p>";
var doc = document.querySelector("#documento");
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
var stringArray = ["item1", "item2", ""];
doc.innerHTML += stringArray;
doc.innerHTML += "<br>";
var numberArray2 = [123, 673, 1029];
doc.innerHTML += numberArray2;
doc.innerHTML += "<br>";
var cualquiertipo = [234, "Texto", true, ["julio", 118, false], 18];
doc.innerHTML += cualquiertipo;
// Un arreglo variado pero fijo - tuple
var strinnumbTuple;
//strinnumbTuple = [22, "lklk"];  // si lo cargamos con valores así, da error.
strinnumbTuple = ["hello", 981]; // así si esta correcto
// tipos de datos comunes en js
// void, undefined, null
