import {RegistroAutomotor} from './registro';
import {Auto} from './auto';
import {Camion} from './camion';
import {Moto} from './moto';
import {Vehiculo} from './vehiculo';



//atributos de autos solo Nº puertas
const auto1 = new Auto(4);

//atributos de motos solo Nº  rodado y cilindrada

const moto1 = new Moto(12, 4);

//atributos de motos solo Nº carga
const camion1 = new Camion(2010);

//atributos vehiculo marca: string , modelo: string , patente:string, annio: string, Auto?:Auto, Camion?:Camion, Moto?:Moto 
//rellenar con undefined el tipo de vehiculo que no va.

const vehiculo1 = new Vehiculo("Renault", "Nº12","FLT453","1985", auto1, undefined, undefined);

const vehiculo2 = new Vehiculo("Escania", "CR56","GTJ657","1999", undefined,camion1,undefined);

const vehiculo3 = new Vehiculo("Sanela", "Bt1","PAC422","2001", undefined,undefined, moto1 );



/*
const registro1 = new RegistroAutomotor(vehiculo1);
const registro2 = new RegistroAutomotor(vehiculo2);
const registro3 = new RegistroAutomotor(vehiculo3);

console.log(registro1);
console.log(registro2);
console.log(registro3);
*/

const registro1 = new RegistroAutomotor();
registro1.agregarVehiculo(vehiculo1);
registro1.agregarVehiculo(vehiculo2);
registro1.agregarVehiculo(vehiculo3);

registro1.eliminarVehiculo(vehiculo1);

registro1.imprimirListaVehiculos;
console.log("getvehiculos metodo");
console.log(registro1.getvehiculos);
console.log(registro1.vehiculos);