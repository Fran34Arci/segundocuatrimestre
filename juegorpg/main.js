"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hechicero_1 = require("./hechicero");
var guerrero_1 = require("./guerrero");
var arquero_1 = require("./arquero");
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, fuerza,espadaGrande, hacha) {
var guerrero1 = new guerrero_1.Guerrero("Conan", 1, 150, 0, 3, 100, false, false);
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, precision)
var arquero1 = new arquero_1.Arquero("Legolas", 1, 120, 0, 3, 100, false, false);
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, mana, manaFuego,manaTrueno
var hechicero1 = new hechicero_1.Hechicero("Merlin", 1, 100, 0, 3, 100, 0, 0);
//Guerrero
for (var x = 0; x <= 10; x++) {
    guerrero1.esquivar();
    guerrero1.defender();
    guerrero1.atacar();
    guerrero1.ataqueEspadaGrande();
    guerrero1.ataqueHacha();
    console.log("DATOS GUERRERO");
    console.log(guerrero1.getDatos() + guerrero1.getDatosGuerrero());
}
//Hechicero
for (var x = 0; x <= 10; x++) {
    hechicero1.esquivar();
    hechicero1.defender();
    hechicero1.atacar();
    hechicero1.ataqueFuego();
    hechicero1.ataqueTrueno();
    console.log("DATOS HECHICERO");
    hechicero1.atacar();
    console.log(hechicero1.getDatos() + hechicero1.getDatosHechicero());
}
//Arquero
for (var x = 0; x <= 25; x++) {
    arquero1.esquivar();
    arquero1.defender();
    arquero1.atacar();
    arquero1.ataqueFlechasOro();
    arquero1.ataqueFlechasPlata();
    arquero1.atacarEvolucionado();
    arquero1.ataqueFlechasRubi();
    arquero1.ataqueFlechasDiamante();
    arquero1.ataqueLlamadoLobo();
    console.log("DATOS ARQUERO");
    console.log(arquero1.getDatos() + arquero1.getDatosArquero());
    console.log("DATOS ARQUERO EVOLUCION");
    console.log(arquero1.getDatosArqueroEvolucion());
}
console.log("DATOS ARQUERO");
console.log(arquero1.getDatos() + arquero1.getDatosArquero());
console.log("DATOS ARQUERO EVOLUCION");
console.log(arquero1.getDatosArqueroEvolucion());
