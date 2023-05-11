import { IPersona } from "./IPersonas";


export class Hombre implements IPersona{
        public nombre!: string;
        public  apellido!: string;
        public edad!: number;
       
        
        constructor(nombre?: string, apellido?: string ){
            this.nombre = nombre ?? '';
            this.apellido = apellido ?? '';
            console.log(`Su nombre es ${this.nombre} y su apellido es ${this.apellido}`)
        }
        public nombre_completo(): string {
            return `${this.nombre} ${this.apellido}`;
        }
        public hablar_futbol(equipo:string, minutos:number ): void {
            console.log(`Hablemos sobre el: ${equipo} ${minutos} minutos, pues está jugando
            como los dioses.`)
        }
     
    }
