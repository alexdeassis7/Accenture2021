 
 export class Persona {
    
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    constructor(cuantoKilometros: number, nombre: string, apellido: string, edad: number) {
        this.kilometros = cuantoKilometros;
        this.edad = edad;
        this.apellido = apellido;
        this.nombre = nombre;
    }


    caminar() {
        console.log('estoy caminando ' + this.kilometros + ' a la semana .')
    }

}