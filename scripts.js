function eleccionComputadora() {
	let opciones = ["piedra", "papel", "tijera"];
	let eleccion = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

	return opciones[eleccion];
}

function jugarRonda(eleccion_jugador, eleccion_computadora) {
	let ganaJugador = 1;
	let ganaComputadora = -1;
	let empate = 0;

	switch (eleccion_jugador) {
		case "piedra":
			if (eleccion_computadora === "tijera") {
				return ganaJugador;
			} else if (eleccion_computadora === "papel") {
				return ganaComputadora;
			} else {
				return empate;
			}

		case "papel":
			if (eleccion_computadora === "piedra") {
				return ganaJugador;
			} else if (eleccion_computadora === "tijera") {
				return ganaComputadora;
			} else {
				return empate;
			}

		case "tijera":
			if (eleccion_computadora === "papel") {
				return ganaJugador;
			} else if (eleccion_computadora === "piedra") {
				return ganaComputadora;
			} else {
				return empate;
			}
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

	let resultado = jugarRonda(eleccion, computadora);

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
	
	if (victoriasJugador === 5  || victoriasComputadora === 5){
		opciones.style.pointerEvents = 'none';
		ganador.style.visibility = boton.style.visibility = 'visible';
		ganador.innerText = victoriasJugador === 5 ? 'Ha ganado el Jugador' : 'Ha ganado la Computadora';
	}
	
}

piedra.addEventListener("click", jugar);
papel.addEventListener("click", jugar);
tijera.addEventListener("click", jugar);
boton.addEventListener("click", () => location.reload());