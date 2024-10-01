// Clase RegistroAutomotor
export {RegistroAutomotor};
import {Vehiculo} from './vehiculo';



        class RegistroAutomotor {

            //private vehiculo: Vehiculo;

              private vehiculos: Vehiculo[] = [];

              marcacamb: string;
              modelocamb: string;
              patentecamb:string; 
              anniocamb: string;
              patenteaux :string;


                constructor() {}
              
           // constructor(vehiculo: Vehiculo) {
             //   this.vehiculo = vehiculo;
              
            //}
          
            agregarVehiculo(nuevoVehiculo: Vehiculo) {
                if (nuevoVehiculo instanceof Vehiculo) {
                  this.vehiculos.push(nuevoVehiculo);
                  console.log("Vehículo agregado: " + nuevoVehiculo.getDatos());
                } else {
                  console.log("No es un objeto Vehiculo");
                }
            }

            darDeBajaVehiculo(vehiculoEliminar: Vehiculo) {
                const index = this.vehiculos.indexOf(vehiculoEliminar);
                if (index !== -1) {
                  this.vehiculos.splice(index, 1);
                  console.log("Vehículo eliminado: " + vehiculoEliminar.getDatos());
                } else {
                  console.log("Vehículo no encontrado");
                }
              }

//atributos marca: string , modelo: string , patente:string, annio: string
                    
              modificarVehiculo1(marcacamb,modelocamb,patentecamb,anniocamb,patente1) {
                const index = this.vehiculos.findIndex((vehiculos) => vehiculos.getPatente() === patente1);
                console.log("Vehículo encontrado " + index);

                if (index !== -1) {
                  this.vehiculos[index].setMarca(marcacamb);
                  this.vehiculos[index].setModelo(modelocamb);
                  this.vehiculos[index].setPatente(patentecamb);
                  this.vehiculos[index].setAnnio(anniocamb);

                  console.log("Vehículo fue modificado" );
                  this.vehiculos.forEach((vehiculo) => console.log(vehiculo.getDatos()));
                } else {
                  console.log("Vehículo no encontrado");
                }
              }




            
              imprimirListaVehiculos() {
                console.log("Lista de vehículos: ");
                this.vehiculos.forEach((vehiculo) => console.log(vehiculo.getDatos()));
              }



              
            getvehiculos(): Vehiculo[] {

                      return this.vehiculos;
               }

               setvehiculos(vehiculos: Vehiculo[]) {
                this.vehiculos = vehiculos;
              }
          










          }
      

  
    
    