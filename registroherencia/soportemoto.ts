
export {SoporteMoto};
import {RegistroAutomotor} from './registro';

    class SoporteMoto extends RegistroAutomotor {
       
        protected clienteMoto: string;
        protected tallerMoto: String;
       
   
        constructor(tallerMoto: string,clienteMoto: string) {
            super();
            this.tallerMoto = tallerMoto;
            this.clienteMoto = clienteMoto;
        }

       
          }






    