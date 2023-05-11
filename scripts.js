// eleccionComputadora
//     retornar la seleccion de piedra papel o tijera aleatoriamente

//eleccionJugador
//  pedir al usuario mediante prompt que ingrese piedra papel o tijera
// validar
//

//jugarRonda
//se le pasa como parametros lo que introdujo el usuario y lo que seleccione aleatoriamente la maquina

//con una funcion llamada juego() loopear 5 veces hasta obtener un ganador. debe llevar registro de la puntuacion de los usuarios


function eleccionComputadora() {
    let opciones = ['piedra', 'papel', 'tijera'];
    let eleccion = Math.floor(Math.random() * ( (opciones.length-1) - 0 + 1)) + 0; 

    return opciones[eleccion];
}


function validarEntrada(eleccion){

    if(eleccion !== 'piedra' && eleccion !== 'papel' && eleccion !== 'tijera'){
        window.alert('"'+ eleccion + '" No es una opción inválida. Presion Aceptar y vuelva a intentarlo.');
        return true;
    }
    return false;
}

function eleccionJugador() {

    let eleccion = '';
    let invalido;

    do {
        invalido = false;
        eleccion = prompt('Piedra, Papel o Tijera?: ').toLowerCase();
        invalido = validarEntrada(eleccion);
    }while (invalido);
    
    return eleccion; 
}

function quienGano(ganador,eleccion_jugador, eleccion_computadora) {

    if (ganador === 1) {
        console.log('Gana el usuario: ' + eleccion_jugador + ' gana a ' + eleccion_computadora );
    } else if (ganador === -1) {
        console.log('Gana la computadora: ' + eleccion_computadora + ' gana a ' + eleccion_jugador );
    }
    else {
        console.log('Empate. ' + eleccion_jugador + ' es igual a ' + eleccion_computadora);
    }

}


function jugarRonda(eleccion_jugador, eleccion_computadora) {

    let ganaJugador = 1;
    let ganaComputadora = -1;
    let empate = 0;

    switch(eleccion_jugador) {
        
        case 'piedra': 
            if (eleccion_computadora === 'tijera') {
                quienGano(ganaJugador, eleccion_jugador, eleccion_computadora);
                return ganaJugador;
            }
            else if ( eleccion_computadora === 'papel') {
                quienGano(ganaComputadora, eleccion_jugador, eleccion_computadora);
                return ganaComputadora;
            }

            else {
                quienGano(empate, eleccion_jugador, eleccion_computadora);
                return empate;
            }
        
        case 'papel':
            if (eleccion_computadora === 'piedra') {
                quienGano(ganaJugador, eleccion_jugador, eleccion_computadora);
                return ganaJugador;
            }
            else if ( eleccion_computadora === 'tijera') {
                quienGano(ganaComputadora, eleccion_jugador, eleccion_computadora);
                return ganaComputadora;
            }

            else {
                quienGano(empate, eleccion_jugador, eleccion_computadora);
                return empate;
            }

        case 'tijera':

            if (eleccion_computadora === 'papel') {
                quienGano(ganaJugador, eleccion_jugador, eleccion_computadora);
                return ganaJugador;
            }
            else if ( eleccion_computadora === 'piedra') {
                quienGano(ganaComputadora, eleccion_jugador, eleccion_computadora);
                return ganaComputadora;
            }

            else {
                quienGano(empate, eleccion_jugador, eleccion_computadora);
                return empate;
            }
    }

}

function ganadorPartida(victoriasJugador, victoriasComputadora) {
    if (victoriasJugador > victoriasComputadora){
        return 'Jugador ganó ' + victoriasJugador + ' a ' + victoriasComputadora;
    }
    else if (victoriasJugador < victoriasComputadora){
        return 'Computadora ganó ' + victoriasComputadora + ' a ' + victoriasJugador;
    }
    else {
        return 'Empate!'
    }
}

function game() {
   
    let victoriasJugador = 0;
    let victoriasComputadora = 0;
    let empates = 0;

    for (let i = 0; i < 5; i++){

        let jugador = eleccionJugador();
        let computadora = eleccionComputadora();
        console.log(jugador);
        console.log(computadora);

        let resultado = jugarRonda(jugador, computadora);
        console.log(resultado);
    
        if (resultado === 1) {
            victoriasJugador++;
        }
        else if (resultado === -1){
            victoriasComputadora++;
        }
        else {
            empates++;
        }


    }

    console.log('Resultados: ');
    console.log(ganadorPartida(victoriasJugador, victoriasComputadora));
    console.log('Hubieron ' + empates + ' empates!');
    
}

game();