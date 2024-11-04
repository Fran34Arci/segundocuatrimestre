"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hechicero_1 = require("./hechicero");
var guerrero_1 = require("./guerrero");
var arquero_1 = require("./arquero");
var arqueroEvo_1 = require("./arqueroEvo");
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, fuerza,espadaGrande, hacha) {
var guerrero1 = new guerrero_1.Guerrero("Conan", 1, 150, 0, 3, 100, false, false);
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, precision, flechasPlata, flechasOro)
var arquero1 = new arquero_1.Arquero("Legolas", 1, 120, 0, 3, 100, false, false);
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, mana, manaFuego,manaTrueno
var hechicero1 = new hechicero_1.Hechicero("Merlin", 1, 100, 0, 3, 100, 0, 0);
console.log(guerrero1.getDatos() + guerrero1.getDatosGuerrero());
console.log(hechicero1.getDatos() + hechicero1.getDatosHechicero());
console.log(arquero1.getDatos() + arquero1.getDatosArquero());
//Arquero
for (var x = 0; x <= 25; x++) {
    arquero1.esquivar();
    arquero1.defender();
    arquero1.atacar();
    arquero1.ataqueFlechasOro();
    arquero1.ataqueFlechasPlata();
    console.log(arquero1.getDatos() + arquero1.getDatosArquero());
}
//Guerrero
for (var x = 0; x <= 10; x++) {
    guerrero1.esquivar();
    guerrero1.defender();
    guerrero1.atacar();
    guerrero1.ataqueEspadaGrande();
    guerrero1.ataqueHacha();
    console.log(guerrero1.getDatos() + guerrero1.getDatosGuerrero());
}
//Hechicero
for (var x = 0; x <= 10; x++) {
    hechicero1.esquivar();
    hechicero1.defender();
    hechicero1.atacar();
    hechicero1.ataqueFuego();
    hechicero1.ataqueTrueno();
    hechicero1.atacar();
    console.log(hechicero1.getDatos() + hechicero1.getDatosHechicero());
}
//datos arquero que va a evolucionar
console.log(arquero1.getDatos() + arquero1.getDatosArquero());
//crea al arquero Evolucion a partir del arquero
var arqueroEvo1 = arqueroEvo_1.ArqueroEvolucion.evolucionar(arquero1);
console.log(arqueroEvo1);
console.log(arqueroEvo1.getDatosArqueroEvolucion());
for (var x = 0; x <= 10; x++) {
    //funciones personaje
    arqueroEvo1.esquivar();
    arqueroEvo1.defender();
    //funciones arquero
    arqueroEvo1.atacar();
    arqueroEvo1.ataqueFlechasPlata();
    arqueroEvo1.ataqueFlechasOro();
    //funciones arqueroEvolucion
    arqueroEvo1.esquivarEvo();
    arqueroEvo1.defenzaEvo();
    arqueroEvo1.atacar();
    arqueroEvo1.ataqueFlechasRubi();
    arqueroEvo1.ataqueFlechasDiamante();
    arqueroEvo1.ataqueLlamadoLobo();
    console.log(arqueroEvo1.getDatosArqueroEvolucion());
}
console.log(arqueroEvo1);
console.log(arqueroEvo1.getDatosArqueroEvolucion());
