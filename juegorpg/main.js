"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hechicero_1 = require("./hechicero");
var guerrero_1 = require("./guerrero");
var arquero_1 = require("./arquero");
var arqueroEvo_1 = require("./arqueroEvo");
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, fuerza,espadaGrande, hacha) {
var guerrero1 = new guerrero_1.Guerrero("Conan", 150, 0, 3, 100, false, false);
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, precision, flechasPlata, flechasOro)
var arquero1 = new arquero_1.Arquero("Legolas", 120, 0, 3, 100, false, false);
//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, mana, manaFuego,manaTrueno
var hechicero1 = new hechicero_1.Hechicero("Merlin", 100, 0, 3, 100, 0, 0);
console.log(guerrero1.getDatos() + guerrero1.getDatosGuerrero());
console.log(hechicero1.getDatos() + hechicero1.getDatosHechicero());
console.log(arquero1.getDatos() + arquero1.getDatosArquero());
//Arquero
for (var x = 0; x <= 10; x++) {
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
    console.log(arquero1.getDatos() + arquero1.getDatosArquero());
}
//Hechicero
for (var x = 0; x <= 10; x++) {
    hechicero1.esquivar();
    hechicero1.defender();
    hechicero1.atacar();
    hechicero1.ataqueFuego();
    hechicero1.ataqueTrueno();
    hechicero1.atacar();
    console.log(arquero1.getDatos() + arquero1.getDatosArquero());
}
console.log(arquero1.getDatos() + arquero1.getDatosArquero());
//Crea Arquero EVolucionado Compone con arquero1
var arqueroEvo1 = new arqueroEvo_1.ArqueroEvolucion(arquero1);
console.log(arqueroEvo1);
console.log(arquero1.getDatos() + arquero1.getDatosArquero() + arqueroEvo1.getDatosArqueroEvolucion());
for (var x = 0; x <= 10; x++) {
    arqueroEvo1.esquivarEvo(arquero1);
    arqueroEvo1.defenzaEvo(arquero1);
    arqueroEvo1.ataqueEvo(arquero1);
    arqueroEvo1.ataqueFlechasRubi(arquero1);
    arqueroEvo1.ataqueFlechasDiamante(arquero1);
    console.log(arquero1.getDatos() + arquero1.getDatosArquero() + arqueroEvo1.getDatosArqueroEvolucion());
}
console.log(arquero1.getDatos() + arquero1.getDatosArquero() + arqueroEvo1.getDatosArqueroEvolucion());