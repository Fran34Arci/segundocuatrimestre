import {Personaje} from "./personaje";
import {Hechicero} from './hechicero';
import {Guerrero} from './guerrero';
import {Arquero} from './arquero';
import { ArqueroEvolucion } from "./arqueroEvo";

//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, fuerza,espadaGrande, hacha) {
const guerrero1 = new Guerrero("Conan",150,0,3,100,false,false);

//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, precision, flechasPlata, flechasOro)
const arquero1 = new Arquero("Legolas",120,0,3,100,false,false);

//nombre, nivel, puntosDeVida, puntosGolpe,cantidadVidas, mana, manaFuego,manaTrueno
const hechicero1 = new Hechicero("Merlin",100,0,3,100,0,0);


console.log(guerrero1.getDatos() + guerrero1.getDatosGuerrero());
console.log(hechicero1.getDatos() + hechicero1.getDatosHechicero());
console.log(arquero1.getDatos() + arquero1.getDatosArquero());


//Arquero
for(let x = 0; x <=25; x++){
    arquero1.esquivar();
    arquero1.defender();
    arquero1.atacar();
    arquero1.ataqueFlechasOro();
    arquero1.ataqueFlechasPlata();
    console.log(arquero1.getDatos() + arquero1.getDatosArquero());
}

//Guerrero
for(let x = 0; x <=10; x++){
    guerrero1 .esquivar();
    guerrero1.defender();
    guerrero1.atacar();
    guerrero1.ataqueEspadaGrande();
    guerrero1.ataqueHacha();
    console.log(arquero1.getDatos() + arquero1.getDatosArquero());
}
//Hechicero
for(let x = 0; x <=10; x++){
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
 const arqueroEvo1 = new ArqueroEvolucion(arquero1);

 

console.log(arqueroEvo1);

console.log(arquero1.getDatos() + arquero1.getDatosArquero() + arqueroEvo1.getDatosArqueroEvolucion());

for(let x = 0; x <=10; x++){
    arqueroEvo1.esquivarEvo();
    arqueroEvo1.defenzaEvo();
    arqueroEvo1.atacar();
    arqueroEvo1.ataqueFlechasOro();
    arqueroEvo1.ataqueFlechasRubi();
    arqueroEvo1.ataqueFlechasDiamante();
    console.log(arquero1.getDatos() + arquero1.getDatosArquero() + arqueroEvo1.getDatosArqueroEvolucion());
}

console.log(arquero1.getDatos() + arquero1.getDatosArquero() + arqueroEvo1.getDatosArqueroEvolucion());