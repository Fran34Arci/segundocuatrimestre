import { Hechicero } from './hechicero';
import { Guerrero } from './guerrero';
import { Arquero } from './arquero';
import { ArqueroEvolucion } from "./arqueroEvo";

//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, fuerza,espadaGrande, hacha) {
const guerrero1 = new Guerrero("Conan",1, 150, 0, 3, 100, false, false);

//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, precision)
const arquero1 = new Arquero("Legolas",1, 120, 0, 3, 100,false,false);

//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, mana, manaFuego,manaTrueno
const hechicero1 = new Hechicero("Merlin",1, 100, 0, 3, 100, 0, 0);

//Guerrero
for (let x = 0; x <= 10; x++) {
    guerrero1.esquivar();
    guerrero1.defender();
    guerrero1.atacar();
    guerrero1.ataqueEspadaGrande();
    guerrero1.ataqueHacha();
    console.log("DATOS GUERRERO");
    console.log(guerrero1.getDatos() + guerrero1.getDatosGuerrero());
}
//Hechicero
for (let x = 0; x <= 10; x++) {
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
for (let x = 0; x <= 25; x++) {
    arquero1.esquivar();
    arquero1.defender();
    arquero1.atacar();
    arquero1.ataqueFlechasOro();
    arquero1.ataqueFlechasPlata();
    arquero1.getPuntosDeVida(), arquero1.getPuntosGolpe(), arquero1.getCantidadVidas(),
    arquero1.getPrecision(), arquero1.getFlechasPlata(), arquero1.getFlechasOro();
console.log("DATOS ARQUERO");
console.log(arquero1.getDatos() + arquero1.getDatosArquero());
}