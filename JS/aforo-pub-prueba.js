// Intrpducción a Javascript

// console.log('Hola Mundo');
// console.log(2+1);


// INICIO
console.log('Contador a cero')
contador = 0;

//Entra un cliente
console.log('Entra un cliente');
contador++;

console.log("Número de personas: " + contador)

// Primer caso

console.log('Sale un cliente');
contador--;
console.log("Número de personas: " + contador)

// Segund0o caso: Llega un cliente
console.log('Llega un cliente')

contador = 20;
if (contador == 20) {
    // si se cumple la condición, se ejecuta:

    console.log('Aforo completo, espera a que salga alguien')

} else {
    // si no se cumple la condición se ejecuta este:
    console.log('El cliente entra')
    console++;
    console.log("Número de personas = " + contador);
}