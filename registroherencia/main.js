"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registro_1 = require("./registro");
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
//atributos de autos 
//marca string, modelo string, patente string, annio string Nº puertas: number
var auto1 = new auto_1.Auto("Renault", "Nº12", "FLT453", "1985", "Auto", 4);
//atributos de motos
//marca string, modelo string, patente string, annio string,cilindrada:number, rodado: number.
var moto1 = new moto_1.Moto("Sanela", "Bt1", "PAC422", "2001", "Moto", 12, 4);
//atributos de motos solo 
//marca string, modelo string, patente string, annio string,tipo:string Nº carga: number
var camion1 = new camion_1.Camion("Escania", "CR56", "GTJ657", "1999", "Camion", 2010);
var registro1 = new registro_1.RegistroAutomotor();
registro1.agregarVehiculos1(auto1);
registro1.agregarVehiculos1(moto1);
registro1.agregarVehiculos1(camion1);
//registro1.imprimirListaVehiculos();
console.log("prueba borrar");
//registro1.darDeBajaVehiculos1(auto1);
console.log("imprimir vehiculos prueba");
registro1.imprimirListaVehiculos1();
//registro1.agregarVehiculos1(auto1);
//registro1.imprimirListaVehiculos();
console.log("prueba 1");
//modificarVehiculo1(marcaCamb,modeloCamb,patenteCamb,annioCamb, tipoCamb,patente1 (la patente del objeto a cambiar), numPuertas? rodado?, cilindrada?,capCarga?) {
registro1.modificarVehiculo1("Renault2", "Nº1212", "FLT453", "1955", "Auto", "FLT453", 8, undefined, undefined, undefined);
registro1.modificarVehiculo1("Sanelar", "Bt123", "PAC422", "2051", "Moto", "PAC422", undefined, 6, 6, undefined);
registro1.modificarVehiculo1("Escanian", "CR777", "GTJ657", "2000", "Camion", "GTJ657", undefined, undefined, undefined, 2588);
//No esta bien aplicada la herencia. La idea del ejercicio es que las clases Auto, Camion y Moto hereden de una clase padre Vehiculo
console.log("prueba 1 fin");
registro1.imprimirListaVehiculos1();
