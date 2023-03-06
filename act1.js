debugger
"use strict"

class Jugador{ //Creo el Jugador
    constructor(nombre, apellidos, nivel = 1,puntuacion = 1){ //Creo un constructor para añadirle los atributos base
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nivel = nivel;               
        this.puntuacion = puntuacion,
        this.puntuacionAcumuladaResta = 0, // Esto lo creo para poder contabilizar las veces que restaba puntos
        this.puntuacionAcumuladaSuma = 0  // Esto lo creo para poder contabilizar las veces que sumaba puntos
    }
    sumarPuntuacion(){ //Aqui sumo puntuacion 
        this.puntuacion += 1
        this.puntuacionAcumuladaSuma += 1
        if (this.puntuacionAcumuladaSuma >= 10){  //Si llega a 10 añado un nuevo nivel y reinicio el contador de puntuacionacumuladasuma
            this.nivel += 1
            this.puntuacionAcumuladaSuma = 0
        }
    }
    restarPuntuacion(){ //Aqui resto puntuacion
        this.puntuacionAcumuladaResta += 1
        this.puntuacion -= 1
        if(this.puntuacionAcumuladaResta >= 10){ //Si llega a 10 quito un nivel y reinicio el contador de puntuacionacumuladaresta
            this.nivel -= 1
            this.puntuacionAcumuladaResta = 0
        }
        if(this.puntuacion == 0){this.resetearPuntuacion()} //Si la puntuacion llega a 0 reseteo jugador
    }

    resetearPuntuacion(){ //Devuelvo el nivel y la puntuacion al de inicio y reinicio los contadores, tambien hago un alert advirtiendo de que el jugador ha sido eliminado 
        this.nivel = 1
        this.puntuacionAcumuladaResta = 0
        this.puntuacionAcumuladaSuma = 0
        this.puntuacion = 1
        alert(`El jugador ${this.nombre} ha sido eliminado`)
        
    }
}

let listaDeJugadores = []   //Creo una lista de jugadores vacia
let Jugador1 = new Jugador("Juan","Lopez")         //Creo los jugadores
let Jugador2 = new Jugador("Alfredo", "Lee")
Jugador1.sumarPuntuacion()
Jugador2.sumarPuntuacion()
Jugador2.restarPuntuacion()
Jugador1.restarPuntuacion()     //Comprueblo las funciones
Jugador1.restarPuntuacion()
listaDeJugadores.push(Jugador1,Jugador2)    //Añado los jugadores a la lista
console.log(Jugador2)           //Los muestro por consola
console.log(Jugador1)           //Los muestro por consola
console.log(listaDeJugadores)   //Muestro el listado de jugadores por consola
