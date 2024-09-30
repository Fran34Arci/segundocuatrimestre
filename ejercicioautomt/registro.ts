// Clase RegistroAutomotor
export {RegistroAutomotor};
import {Vehiculo} from './vehiculo';



  

        class RegistroAutomotor {

            //private vehiculo: Vehiculo;

              vehiculos: Vehiculo[] = [];

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

            eliminarVehiculo(vehiculoEliminar: Vehiculo) {
                const index = this.vehiculos.indexOf(vehiculoEliminar);
                if (index !== -1) {
                  this.vehiculos.splice(index, 1);
                  console.log("Vehículo eliminado: " + vehiculoEliminar.getDatos());
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
            
          










          }
      


  
    
    