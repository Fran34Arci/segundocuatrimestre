// Clase RegistroAutomotor
export {RegistroAutomotor};
import {Vehiculo} from './vehiculo';
import {Auto} from './auto';
import {Moto} from './moto';
import {Camion} from './camion';

           class RegistroAutomotor {
            //private vehiculo: Vehiculo;

              private vehiculos: Vehiculo[] = [];
              private autos: Auto[] = [];
              private motos: Moto[] = [];
              private camiones: Camion[] = [];

              private marcaCamb: string;
              private modeloCamb: string;
              private patenteCamb:string; 
              private annioCamb: string;
              private patenteAux :string;
              private tipoCamb :string;
  
                constructor() {}
                    
               
            public agregarVehiculos1(nuevoVehiculo: Vehiculo) {   
              if (nuevoVehiculo instanceof Auto) {
                this.vehiculos.push(nuevoVehiculo);
                console.log( `Vehículo tipo Auto agregado:\n ${nuevoVehiculo.getDatos()} ${nuevoVehiculo.getDatosAuto()}`);
                } 

                  else if (nuevoVehiculo instanceof Moto) {
                 // this.motos.push(nuevoVehiculo);
                  this.vehiculos.push(nuevoVehiculo);
                  console.log( `Vehículo tipo Moto agregado:\n ${nuevoVehiculo.getDatos()} ${nuevoVehiculo.getDatosMoto()}`);
                  }          
                  else if (nuevoVehiculo instanceof Camion) {
                  //  this.camiones.push(nuevoVehiculo);
                    this.vehiculos.push(nuevoVehiculo);
                    console.log( `Vehículo tipo Camion agregado:\n ${nuevoVehiculo.getDatos()} ${nuevoVehiculo.getDatosCamion()}`);
                    } 
              else {
                console.log("No es un objeto Vehiculo");
              }
          }

              public darDeBajaVehiculos1(vehiculoEliminar: Vehiculo) {
                if (vehiculoEliminar instanceof Auto) { 
                const index = this.vehiculos.indexOf(vehiculoEliminar);
                  if (index !== -1) {
                  this.vehiculos.splice(index, 1);
                    console.log(`Vehículo tipo Auto eliminado: ${vehiculoEliminar.getDatos()} ${vehiculoEliminar.getDatosAuto()}`);
                  } 
                }

                 else if (vehiculoEliminar instanceof Moto) {
                    const index = this.vehiculos.indexOf(vehiculoEliminar);
                    if (index !== -1) {
                      this.vehiculos.splice(index, 1);
                      console.log(`Vehículo tipo Moto eliminado: ${vehiculoEliminar.getDatos()} ${vehiculoEliminar.getDatosMoto()} `);
                    } 
                  }      

                  else if (vehiculoEliminar instanceof Camion) {
                      
                      const index = this.vehiculos.indexOf(vehiculoEliminar);
                      if (index !== -1) {
                      this.camiones.splice(index, 1);
                        this.vehiculos.splice(index, 1);
                        console.log(`Vehículo tipo Camion eliminado: ${vehiculoEliminar.getDatos()} ${vehiculoEliminar.getDatosCamion()} `);
                      } 
                      } 
                      else {
                        console.log("Vehículo no encontrado");
                      }
              }


              public modificarVehiculo1(marcaCamb,modeloCamb,patenteCamb,annioCamb, tipoCamb,patente1,numPuertas?, rodado?, cilindrada?,capCarga?) {
                const index = this.vehiculos.findIndex((vehiculos) => vehiculos.getPatente() === patente1);
                const vehiculoAmodificar = this.vehiculos.find((vehiculos) => vehiculos.getPatente() === patente1);
                console.log(`Vehículo encontrado ${index}`);
               
                if (index !== -1) {

                  this.vehiculos[index].setMarca(marcaCamb);
                  this.vehiculos[index].setModelo(modeloCamb);
                  this.vehiculos[index].setPatente(patenteCamb);
                  this.vehiculos[index].setAnnio(annioCamb);
                  this.vehiculos[index].setTipo(tipoCamb);

                  if (vehiculoAmodificar instanceof Auto) { 
                    vehiculoAmodificar.setNumPuertas(numPuertas);
                    console.log("Vehículo fue modificado" );
                    console.log(`${vehiculoAmodificar.getDatos()} ${vehiculoAmodificar.getDatosAuto()}`);
                  }
                    else if (vehiculoAmodificar instanceof Moto) { 
                     
                      vehiculoAmodificar.setRodado(rodado);
                      vehiculoAmodificar.setCilindrada(cilindrada);
                      console.log("Vehículo fue modificado" );
                      console.log(`${vehiculoAmodificar.getDatos()} ${vehiculoAmodificar.getDatosMoto()}`);
                      }
                      else if (vehiculoAmodificar instanceof Camion) { 
                        vehiculoAmodificar.setCapCarga(capCarga);
                        console.log("Vehículo fue modificado" );
                        console.log(`${vehiculoAmodificar.getDatos()} ${vehiculoAmodificar.getDatosCamion()}`);
                        }
                                      

                } else {
                  console.log("Vehículo no encontrado");
                }
              }

              public imprimirListaVehiculos1() {
                                         
                console.log("Lista de vehículos: ");
                this.vehiculos.forEach((vehiculo) => { 
                  if (vehiculo instanceof Auto) { console.log(`${vehiculo.getDatos()} ${vehiculo.getDatosAuto()}`);} 
                    else if (vehiculo instanceof Moto) { console.log(`${vehiculo.getDatos()} ${vehiculo.getDatosMoto()}`);} 
                      else if (vehiculo instanceof Camion) { console.log(`${vehiculo.getDatos()} ${vehiculo.getDatosCamion()}`);} 
                });
              
              }       
          
              public getvehiculos(): Vehiculo[] {
              return this.vehiculos;
               }
               public setvehiculos(vehiculos: Vehiculo[]) {
                this.vehiculos = vehiculos;
              }  
              
          }
      

  
    
    