import {RegistroAutomotor} from './registro';
import {Auto} from './auto';
import {Camion} from './camion';
import {Moto} from './moto';
import {Vehiculo} from './vehiculo';


//atributos de autos solo Nº puertas
const auto1 = new Auto(4);

//atributos de motos  Nº rodado y Nº cilindrada
const moto1 = new Moto(12, 4);

//atributos de motos solo Nº carga
const camion1 = new Camion(2010);

//atributos vehiculo marca: string , modelo: string , patente:string, annio: string, Auto?:Auto, Camion?:Camion, Moto?:Moto 
//rellenar con undefined el tipo de vehiculo que no va.

const vehiculo1 = new Vehiculo("Renault", "Nº12","FLT453","1985", auto1.getDatosAuto());

const vehiculo2 = new Vehiculo("Escania", "CR56","GTJ657","1999", camion1.getDatosCamion());

const vehiculo3 = new Vehiculo("Sanela", "Bt1","PAC422","2001",  moto1.getDatosMoto() );


const registro1 = new RegistroAutomotor();
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
registro1.modificarVehiculo1( "Renault2","Nº1212","FLT453","198599" ,"FLT453");



