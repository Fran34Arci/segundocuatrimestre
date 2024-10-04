export {Auto};


class Auto {
    //atributos o variables internas
    
    private numPuertas: number;

       //constructor
    constructor(numPuertas: number) {
      
        this.numPuertas = numPuertas;
    }

    //metodos: getters y setters
  
    getnumpuertas(): number {
        return this.numPuertas;
    }
    setnumpuertas(nuevoNumPuertas:number): void {
            this.numPuertas = nuevoNumPuertas;
    }
  
}