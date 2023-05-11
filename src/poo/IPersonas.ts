
// El read only solo permite que la propiedad sea inicializada,
// en el constructor. Fuera del constructor solo se puede leer el valor,
// En caso de asignarle un valor fuera del constructor, type script generaría un error.
export interface IPersona { 
    readonly nombre: string;
    readonly apellido: string;
    edad: number;

    nombre_completo(): string;
};




