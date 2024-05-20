//INICIO

let contador; 
//contador a 0
contador = 0;

//Tenemos que identificar todos los elementos HTML que vayamos a manipular con JS.
//Los guardamos en variables:

let btnSumar = document.getElementById('sumar')

let btnRestar = document.getElementById('restar')

let pResultado = document.getElementById('resultado')

let aforo = document.getElementById('completo')



//La funciones son cloques de código reutilizables que podemos llamar voluntad

function sumar() {
    if (contador < 20) contador++; { 
    }
    resultado();
}

function restar() {
    if (contador > 0) contador--; {
    }
    resultado();
}

function resultado() {
    pResultado.innerHTML = contador;
    //Cada vez que ejecutamos esta función, el párrafo HTML se actualiza con el valor del contador.
}