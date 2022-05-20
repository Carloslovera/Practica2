"use strict";
//alert("Hola mundo");
/*alert("Hola programadores");

alert("Ahora si no abra error");
[1,2].forEach(alert)

let mensaje = "";
mensaje = "Soy carlos";

alert(mensaje);

let num = 5;
alert(num);

const COLOR_ORANGE = "#FF77F00";

let color = COLOR_ORANGE;

alert("color");*/

/*let double = "comillas dobles";
let single = 'comillas simples';
let backtick = `Hola ${name}`;

alert(double);
alert(single);
alert(backtick);*/

/*let name = "carlos";
alert(`Hola ${name}`);
//Hola carlos

alert(`El resultado es ${2 + 2}`);*/
//El resultado es 4

/*let isFriday = true;
//Es viernes

let isFinishThisClass = false;
//La clase aun no ha terminado

alert(isFriday);
alert(isFinishThisClass);*/



/*let num = Number("esto no es un numero");
alert(num);

alert( Number (" 567 ") );
alert( Number ("567z") );
alert( Number (true) );
alert( Number (false) );*/

/*let a = "Nuevo" + " string";
alert(a);*/

/*let x = 1;
alert( +x );

let y = -2;
alert( +y );

let c = 3;
alert( +c );*/

//let a = "6";
//let b = "4";

//alert( +a + +b );
//alert( Number(a) + Number(b) );

//let c = 5;
//c--;
//alert( c );
//let test = prompt( "title", "" );

/*let isBoss = confirm("¿Eres tu el jefe?");
alert( isBoss );*/

/*let name = prompt( "¿Cual es el nombre de tu profesor?" );
if ( name == 'kiko' ) {
    alert( "Correcto!!");
    alert( "Eres lo maximo!!" );
} else {
    alert( 'Sigue intentando!!' );
    alert( 'Sigue estudiando perro loco!!' );
}*/

//anidando
/*let year = prompt('¿En que año salio javascrip?', '');

if (year < 2015) {
    alert( 'Demasiado pronto...' );
} else if (year > 2015) {
    alert( 'Te has pasado' );
} else {
    alert( 'Correcto!!' );
}*/

/*let age = prompt( '¿Que edad tienes?' );

if ( age > 18 ) {
    alert( 'Eres mayor' );
} else {
    alert( 'Eres menor, no puedes entrar' );
}*/

/*let hour = 12;
let isWeekend = true;

if (hour < 9 || hour > 17 || isWeekend ) {
    alert( 'La tienda esta cerrada!' );
}*/

/*let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert( 'La hora es 12:30' );
}*/

/*let i = 3;
while (i) {
    alert( i );
    i--;
}*/

/*var name;

name = "Hernan";

let title = "Gadea";

const fechaDeNacimiento = '13/02/89';*/

/*
    Tipos de datos

    string: Son valores de tipo texto
    number: Son valores de tipo numerico
    boolean: Son valores true o false

*/

/*//Tipo de dato string (van entre comillas dobles o simples "" '')
let name = "Carlos";

//Tipo de dato number (Van sin comillas)
let number = 33;

//Tipo de dato boolean (Valores true/false)
let esMayorDeEdad = true;

//Tipo de dato undefined
let sexo = 'M';*/

/* Definimos variables number1 mas number2, de tipo number */
//var number1 = 5;
//var number2 = 4;

//Declaro una variable boolean(true o false)
//var esMayorDeEdad = false;
/*var edad = 190;

//Condicion
esMayorDeEdad = edad > 18 && edad < 100;*/

/*
Estructuras condicionales
if / else
*/
/*if (edad > 18 && edad < 100) {
    esMayorDeEdad = true;
} else {
    esMayorDeEdad = false;
}*/

// Al usar el operador numerico con texo realizamos una concatenacion
//console.log( "El resultado es: " + (number1 + number2));
//console.log(esMayorDeEdad);

/*switch (edad) {
     case 19:
         console.log(`${edad} Es mayor de edad`);
        break;
     case 15:
        edad = true; console.log(`${edad} Es menor de edad`);
        break;
     case 80:
        edad = false; console.log(`${edad} Es un señor mayor`);
        break;
    default:
        edad = false; console.log(`${edad} error`);
        break;
}*/

/*var esMayorDeEdad;

if (esMayorDeEdad) {
    edad = true;
} else {
    edad = false;
}

console.log(edad);*/

/*var edad;

edad = parseInt(prompt("Ingresa tu edad"));

if (edad > 18) {
    alert("Es mayor de edad");
} else {
    alert("Es menor de edad");
}*/

//var number = 0;
/*while (number <= 10) {
    console.log("3 x " + number + " = " + (3 * number));
    number++;
}*/

/*for (let i = 0; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
    
}*/

//var apellido = prompt("ingrese su apellido");
//Las funsiones deben ser llamadas sino no podras utilizarlas
/*function saludar (nombre) {
    alert("Hola, " + nombre +" saludos desde la consola");
}

saludar(nombre);*/
/*var nieve = "hielo";
function frost(nieve) {
    console.log("Que caiga el " + nieve + " por favor");
}

frost(nieve);

function yuyi(apellido) {
    alert("Hola, " + apellido + " Como estas usted?");
}

yuyi(apellido);*/

/*function calcularSiEsMayorDeEdad() {
    let edad = prompt("Ingresa tu edad");
    const esMayorDeEdad = (edad) => {
        if (edad >= 18 ) {
            alert("Es mayor con " + edad );
        } else {
            alert("Es menor con " + edad);
        }
    }
    esMayorDeEdad(edad);
}

calcularSiEsMayorDeEdad();*/
//Trabajamos con arrays
/*var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

dias.forEach(
    dias => {
        console.log(dias);
    }
);*/

var number = [1, 2, 3, 4, 5]

/*const corrigelo = number.every(number => number < 4);

const corrigelo2 = number.some(number => number > 4);

console.log(corrigelo,corrigelo2);*/

/*const sum = number.reduce((total, valor) => total + valor, 0);
console.log(sum);*/

/*const sum = number.map(numb => numb + 2);
console.log(sum);

console.log(number);*/

const filt = number.filter(numb => numb <5);
console.log(filt);
