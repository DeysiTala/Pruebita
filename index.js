var assert = require("assert");

//ejercicio 1
var numeros= [4,4,5,12];
 var entero = 9;
 var multiplicacion= numeros.reduce(function(resultado,numero2)
 {
 return resultado*numero2;
 });

 document.write(multiplicacion*entero);
