export {Auto};


class Auto {
    //atributos o variables internas
    
    protected numPuertas: number;

       //constructor
    constructor(numPuertas: number) {
      
        this.numPuertas = numPuertas;
    }

    //metodos: getters y setters
  


    public getNumPuertas(): number {
        return this.numPuertas;
    }
    public setNumPuertas(nuevoNumPuertas:number): void {
            this.numPuertas = nuevoNumPuertas;
    }

    public getDatosAuto() {
        return(
         `Nº Puertas: ${this.getNumPuertas()}`
        )
    }
  
}