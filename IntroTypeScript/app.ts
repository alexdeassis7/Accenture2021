import { Persona } from "./Persona";

console.log('Hola Mundo');

// LET - VAR - CONST

//var no tiene un ambito de bloque 
var foo = 123;
if(true){
    var foo = 456;
}
console.log(foo);  //456


//Let si tiene un ambito de bloque
let fooLet = 123;
if(true){
    let fooLet = 456;
}
console.log(fooLet);  //123

//CONST
const fooConst = 123;
// fooConst = 456; // NO PERMITIDO por ser inmutable

//*las constantes tambien admiten objetos literales 
const fooLiteral = { bar : 123 } ;
//fooLiteral = {bar : 456}; // ERROR no se permite la modificacion de objeto 

//pero si puedo modificar el contenido de las variables que contiene el objeto literal 

const fooL =  { bar : 123 } ;

fooL.bar = 456; //Permitido!!!

console.log(foo);

//tipos de datos primitivos 
//boolean 

let isDone: boolean = false ;

//number  -> datos numericos 
let decimal : number = 6;
let hex: number = 0xf00d ;
let binary: number = 0b1010 ;
let octal : number = 0o744; 
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

//String 
//cadenas de caracteres y/o textos
let color : string ="blue";
color = "red";
console.log(color);

// se puede utilizar "Templates" para concatenar strings
let fullName: string = "Cintia Rodriguez";
let age: number = 35;
let sentence : string = `Hello, my name is ${ fullName }. I ll be ${age + 1 }  years old ... `;
console.log(sentence);

let sentence2: string = "Hello, my name is " + fullName + "." + "I ll be " + (age + 1 ) + " years old next month.";   


console.log(sentence2);











