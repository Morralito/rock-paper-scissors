function eleccionComputadora() {
	let opciones = ["piedra", "papel", "tijera"];
	let eleccion = Math.floor(Math.random() * (opciones.length - 1 - 0 + 1)) + 0;

	return opciones[eleccion];
}

function quienGano(ganador, eleccion_jugador, eleccion_computadora) {
	if (ganador === 1) {
		console.log(
			"Gana el usuario: " + eleccion_jugador + " gana a " + eleccion_computadora
		);
	} else if (ganador === -1) {
		console.log(
			"Gana la computadora: " +
				eleccion_computadora +
				" gana a " +
				eleccion_jugador
		);
	} else {
		console.log(
			"Empate. " + eleccion_jugador + " es igual a " + eleccion_computadora
		);
	}
}

function jugarRonda(eleccion_jugador, eleccion_computadora) {
	let ganaJugador = 1;
	let ganaComputadora = -1;
	let empate = 0;

	switch (eleccion_jugador) {
		case "piedra":
			if (eleccion_computadora === "tijera") {
				// quienGano(ganaJugador, eleccion_jugador, eleccion_computadora);
				return ganaJugador;
			} else if (eleccion_computadora === "papel") {
				// quienGano(ganaComputadora, eleccion_jugador, eleccion_computadora);
				return ganaComputadora;
			} else {
				// quienGano(empate, eleccion_jugador, eleccion_computadora);
				return empate;
			}

		case "papel":
			if (eleccion_computadora === "piedra") {
				// quienGano(ganaJugador, eleccion_jugador, eleccion_computadora);
				return ganaJugador;
			} else if (eleccion_computadora === "tijera") {
				// quienGano(ganaComputadora, eleccion_jugador, eleccion_computadora);
				return ganaComputadora;
			} else {
				// quienGano(empate, eleccion_jugador, eleccion_computadora);
				return empate;
			}

		case "tijera":
			if (eleccion_computadora === "papel") {
				// quienGano(ganaJugador, eleccion_jugador, eleccion_computadora);
				return ganaJugador;
			} else if (eleccion_computadora === "piedra") {
				// quienGano(ganaComputadora, eleccion_jugador, eleccion_computadora);
				return ganaComputadora;
			} else {
				// quienGano(empate, eleccion_jugador, eleccion_computadora);
				return empate;
			}
	}
}

function ganadorPartida(victoriasJugador, victoriasComputadora) {
	if (victoriasJugador > victoriasComputadora) {
		return "Jugador ganó " + victoriasJugador + " a " + victoriasComputadora;
	} else if (victoriasJugador < victoriasComputadora) {
		return "Computadora ganó " + victoriasComputadora + " a " + victoriasJugador;
	} else {
		return "Empate!";
	}
}

let victoriasJugador = 0;
let victoriasComputadora = 0;
let empates = 0;

//seleciona opciones

let opciones = document.querySelector('.opciones');

//selecciona botones
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");

//selecciona campo de puntaje
let puntajeUsuario = document.querySelector('.puntajeUsuario');
let puntajeBot = document.querySelector('.puntajeBot');
let puntajeEmpate = document.querySelector('.empates');

//seleciona ganador

let ganador = document.querySelector('.ganador');

// boton

let boton = document.querySelector('.reiniciar');

function jugar(val) {
	let eleccion = val.target.id;
	let computadora = eleccionComputadora();
	// console.log(eleccion);
	// console.log(computadora);

	let resultado = jugarRonda(eleccion, computadora);
	// console.log(resultado);

	if (resultado === 1) {
		victoriasJugador++;
		puntajeUsuario.innerText = victoriasJugador;
	} else if (resultado === -1) {
		victoriasComputadora++;
		puntajeBot.innerText = victoriasComputadora;
	} else {
		empates++;
		puntajeEmpate.innerText = empates;
	}
	
	if (victoriasJugador === 5){
		ganador.style.visibility = boton.style.visibility = 'visible';
		ganador.innerText = 'Ha ganado el Jugador';
		opciones.style.pointerEvents = 'none';
		
	}
	else if (victoriasComputadora === 5) {
		ganador.style.visibility = boton.style.visibility = 'visible';
		ganador.innerText = 'Ha ganado la computadora';
		opciones.style.pointerEvents = 'none';
	}
	
}

function recargarPagina() {
    location.reload();
}


piedra.addEventListener("click", jugar);
papel.addEventListener("click", jugar);
tijera.addEventListener("click", jugar);
boton.addEventListener("click", recargarPagina);