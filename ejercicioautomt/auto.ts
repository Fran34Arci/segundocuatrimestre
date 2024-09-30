export {Auto};


class Auto {
    //atributos o variables internas
    
    private numpuertas: number;

   
    //constructor
    constructor(numpuertas: number) {
        
        this.numpuertas = numpuertas;

    }


    //metodos: getters y setters
  
    getnumpuertas(): number {
        return this.numpuertas;
    }
    setnumpuertas(nuevonumpuertas:number): void {
            this.numpuertas = nuevonumpuertas;
    }

  
}