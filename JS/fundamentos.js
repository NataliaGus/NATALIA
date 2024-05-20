//Las variables son "cajitas" donde guardamos datos
//Primero debemos declarar una variable
let nombre; 

//let significa que tenemos la intención de utilizar una variable dentro del contexto del código actual.

//Podemos usar las variables de dos formas. La primera es asignarles un valor y la segunda es llamarlas para leer y tomar su valor actual.
//Modificar una variable:
nombre = "Gus";

//Llamar a una variable
console.log(nombre);

//Las variables pueden contener en tres tipos de datos:

//1. Cadenas de texto
apellido = "Soba"

//Las cadenas de texto son sólo caracteres de planos. No se puede operar con ellas, sólo unirlas o separarlas.

nombre = "Cristina";

console.log(nombre + " " + apellido);

nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//Las cadenas de texto se definen por llevar comillas tanto al inicio como al final.

//2. Intergers o números íntegros.
edad = 35;
edad = 15;

//Son números operables. Se pueden sumar, restar... y hacer todo tipo de cálculo con ellos.

//Un ejemplo de que necesitamos guardar un int es que tendremos que calcular datos a partir de estos: 
añoNacimiento = 2024 - edad;
console.log(añoNacimiento);
let mayorEdad;

//saber si la persona es mayor de edad
if (edad >= 18) {

    console.log(nombre + " tiene " + edad + " años. Es mayor de edad" ) 
    mayorEdad = true;
    }

    else{
        //mensaje de que la persona es menor de edad
        console.log(nombre + "  tiene " + edad + " años. No es mayor de edad." )
        console.log(nombre + " es menor de edad. Le quedan " + (18 - edad) + "años para ser mayor.")
        mayorEdad = false;
    }

    //ejemplo de dato númerico que va en cadena de texto o string
    dni = "4159481656";
    cp = "48002";
    nss = "784038284894"

    // 3. Booleano o estado binario: no puede tener más dos opciones
    espera = true;

    //sólo pueden tener dos valores, "true" o "false"
    //se generan a partir de compraciones

    if (espesa == true) {
        console.log("Tomar café inmediatamente!")
    }
    
    //las tres son iguales
    if (mayorEdad != true ) {}
    if (mayorEdad == false) {}
    if (mayorEdad) {}