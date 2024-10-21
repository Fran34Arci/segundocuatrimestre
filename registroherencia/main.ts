import {RegistroAutomotor} from './registro';
import {Auto} from './auto';
import {Camion} from './camion';
import {Moto} from './moto';
import {Vehiculo} from './vehiculo';
import { SoporteMoto } from './soportemoto';
import { SoporteCamion } from './sosportecamion';


//atributos de autos 
//marca string, modelo string, patente string, annio string Nº puertas: number
const auto1 = new Auto("Renault", "Nº12","FLT453","1985","Auto",4);

//atributos de motos
//marca string, modelo string, patente string, annio string,cilindrada:number, rodado: number.
const moto1 = new Moto("Sanela", "Bt1","PAC422","2001","Moto",12, 4);

//atributos de motos solo 
//marca string, modelo string, patente string, annio string,tipo:string Nº carga: number
const camion1 = new Camion("Escania", "CR56","GTJ657","1999","Camion",2010);


const registro1 = new RegistroAutomotor();

registro1.agregarVehiculos1(auto1);
registro1.agregarVehiculos1(moto1);
registro1.agregarVehiculos1(camion1);

registro1.imprimirListaVehiculos1();

console.log("prueba borrar");
registro1.darDeBajaVehiculos1(auto1);
registro1.imprimirListaVehiculos1();

//modificar: marcaCamb,modeloCamb,patenteCamb,annioCamb, tipoCamb,patente1 (la patente del objeto a cambiar), numPuertas? rodado?, cilindrada?,capCarga?) 

registro1.modificarVehiculo1("Renault2","Nº1212","FLT453","1955","Auto","FLT453",8,undefined,undefined,undefined);

registro1.modificarVehiculo1("Sanelar", "Bt123","PAC422","2051","Moto","PAC422",undefined,6,6,undefined);

registro1.modificarVehiculo1("Escanian","CR777","GTJ657","2000","Camion","GTJ657",undefined,undefined,undefined,2588);

registro1.imprimirListaVehiculos1();