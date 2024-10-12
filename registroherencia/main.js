"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registro_1 = require("./registro");
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var vehiculo_1 = require("./vehiculo");
var soportemoto_1 = require("./soportemoto");
var sosportecamion_1 = require("./sosportecamion");
//atributos de autos solo Nº puertas
var auto1 = new auto_1.Auto(4);
//atributos de motos  Nº rodado y Nº cilindrada
var moto1 = new moto_1.Moto(12, 4);
var moto2 = new moto_1.Moto(24, 6);
//atributos de motos solo Nº carga
var camion1 = new camion_1.Camion(2010);
var camion2 = new camion_1.Camion(254);
//atributos vehiculo marca: string , modelo: string , patente:string, annio: string, Auto?:Auto, Camion?:Camion, Moto?:Moto 
//rellenar con undefined el tipo de vehiculo que no va.
var vehiculo1 = new vehiculo_1.Vehiculo("Renault", "Nº12", "FLT453", "1985", auto1.getDatosAuto());
var vehiculo2 = new vehiculo_1.Vehiculo("Escania", "CR56", "GTJ657", "1999", camion1.getDatosCamion());
var vehiculo3 = new vehiculo_1.Vehiculo("Sanela", "Bt1", "PAC422", "2001", moto1.getDatosMoto());
var vehiculo4 = new vehiculo_1.Vehiculo("Ford", "T500", "APA456", "2009", camion2.getDatosCamion());
var vehiculo5 = new vehiculo_1.Vehiculo("SportGt", "Cr44", "TIL581", "2002", moto2.getDatosMoto());
// atributos tallerMoto: string,clienteMoto: string
var sopMoto1 = new soportemoto_1.SoporteMoto("Peter Parker", "Taller Mañanita Motos");
//atrigutos tallerCamion: string,clienteCamion: string
var sopCamion1 = new sosportecamion_1.SoporteCamion("Ramon Rutas", "Taller El Pasguato");
var registro1 = new registro_1.RegistroAutomotor();
registro1.agregarVehiculo(vehiculo1);
registro1.agregarVehiculo(vehiculo2);
registro1.agregarVehiculo(vehiculo3);
registro1.imprimirListaVehiculos();
registro1.darDeBajaVehiculo(vehiculo1);
registro1.imprimirListaVehiculos();
registro1.agregarVehiculo(vehiculo1);
registro1.imprimirListaVehiculos();
console.log("prueba 1");
//atributos a cambiar marca:string, modelo: string, patente:string, annio:string.Al ultimo colocar la patente del objeto a cambiar.//"Renault", "Nº12","FLT453","1985"
registro1.modificarVehiculo1("Renault2", "Nº1212", "FLT453", "198599", "FLT453");
//Prueva Herencia
sopMoto1.agregarVehiculo(vehiculo5);
sopCamion1.agregarVehiculo(vehiculo4);
//Imprime registro
console.log("Imprime registro");
registro1.imprimirListaVehiculos();
//Imprime SopMOTO
console.log("Imprime SopMOTO");
sopMoto1.imprimirListaVehiculos();
//Imprime SopCAMION
console.log("Imprime SopCAMION");
sopCamion1.imprimirListaVehiculos();
