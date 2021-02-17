"use strict";
exports.__esModule = true;
console.log('Hola Mundo');
// LET - VAR - CONST
//var no tiene un ambito de bloque 
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); //456
//Let si tiene un ambito de bloque
var fooLet = 123;
if (true) {
    var fooLet_1 = 456;
}
console.log(fooLet); //123
//CONST
var fooConst = 123;
// fooConst = 456; // NO PERMITIDO por ser inmutable
//*las constantes tambien admiten objetos literales 
var fooLiteral = { bar: 123 };
//fooLiteral = {bar : 456}; // ERROR no se permite la modificacion de objeto 
//pero si puedo modificar el contenido de las variables que contiene el objeto literal 
var fooL = { bar: 123 };
fooL.bar = 456; //Permitido!!!
console.log(foo);
//tipos de datos primitivos 
//boolean 
var isDone = false;
//number  -> datos numericos 
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
//String 
//cadenas de caracteres y/o textos
var color = "blue";
color = "red";
console.log(color);
// se puede utilizar "Templates" para concatenar strings
var fullName = "Cintia Rodriguez";
var age = 35;
var sentence = "Hello, my name is " + fullName + ". I ll be " + (age + 1) + "  years old ... ";
console.log(sentence);
var sentence2 = "Hello, my name is " + fullName + "." + "I ll be " + (age + 1) + " years old next month.";
console.log(sentence2);
