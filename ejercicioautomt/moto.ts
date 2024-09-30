export {Moto};

class Moto {
    //atributos o variables internas
   
    private rodado: number;
    private cilindrada: number;

   
    //constructor
    constructor(cilindrada:number, rodado: number) {
        
        this.rodado= rodado;
        this.cilindrada= cilindrada;
       
    }


    //metodos: getters y setters
    getRodado(): number{
        return this.rodado;
    }
    setRodado(nuevorodado: number ): void {
            this.rodado= nuevorodado;
    }
         
    getCilindrada(): number{
        return this.cilindrada;
    }
    setCilindrada(nuevocilindrada: number ): void {
            this.cilindrada= nuevocilindrada;
    }

   

    }
 