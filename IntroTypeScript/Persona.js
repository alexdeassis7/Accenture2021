"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(cuantoKilometros, nombre, apellido, edad) {
        this.kilometros = cuantoKilometros;
        this.edad = edad;
        this.apellido = apellido;
        this.nombre = nombre;
    }
    Persona.prototype.caminar = function () {
        console.log('estoy caminando ' + this.kilometros + ' a la semana .');
    };
    return Persona;
}());
exports.Persona = Persona;
