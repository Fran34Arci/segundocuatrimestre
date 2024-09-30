"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registro_1 = require("./registro");
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var vehiculo_1 = require("./vehiculo");
//atributos de autos solo Nº puertas
var auto1 = new auto_1.Auto(4);
//atributos de motos solo Nº  rodado y cilindrada
var moto1 = new moto_1.Moto(12, 4);
//atributos de motos solo Nº carga
var camion1 = new camion_1.Camion(2010);
//atributos vehiculo marca: string , modelo: string , patente:string, annio: string, Auto?:Auto, Camion?:Camion, Moto?:Moto 
//rellenar con undefined el tipo de vehiculo que no va.
var vehiculo1 = new vehiculo_1.Vehiculo("Renault", "Nº12", "FLT453", "1985", auto1, undefined, undefined);
var vehiculo2 = new vehiculo_1.Vehiculo("Escania", "CR56", "GTJ657", "1999", undefined, camion1, undefined);
var vehiculo3 = new vehiculo_1.Vehiculo("Sanela", "Bt1", "PAC422", "2001", undefined, undefined, moto1);
/*
const registro1 = new RegistroAutomotor(vehiculo1);
const registro2 = new RegistroAutomotor(vehiculo2);
const registro3 = new RegistroAutomotor(vehiculo3);

console.log(registro1);
console.log(registro2);
console.log(registro3);
*/
var registro1 = new registro_1.RegistroAutomotor();
registro1.agregarVehiculo(vehiculo1);
registro1.agregarVehiculo(vehiculo2);
registro1.agregarVehiculo(vehiculo3);
registro1.eliminarVehiculo(vehiculo1);
registro1.imprimirListaVehiculos;
console.log("getvehiculos metodo");
console.log(registro1.getvehiculos);
console.log(registro1.vehiculos);
