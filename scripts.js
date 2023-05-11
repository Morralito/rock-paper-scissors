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

function eleccionJugador() {

    let eleccion = prompt('Piedra, Papel o Tijera?: ').toLowerCase();
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

} //hay que validar entrada de usuario para evitar que ingrese otra cosa que no sea piedra papel o tijera.

function game() {
    let player = eleccionJugador();
    let computer = eleccionComputadora();
    console.log(player);
    console.log(computer);
    
    let result = jugarRonda(player, computer);
    console.log(result);
}