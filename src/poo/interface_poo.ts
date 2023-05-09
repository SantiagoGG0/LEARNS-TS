enum Genero{
    hombre,
    mujer
}

enum Construcción{
    residencial,
    comercial
}
// La marca readonly solo se le puede asignar un valor una vez
// la instancia es creada, a partir de este momento no puede ser modificada.
interface IPersona{ 
    readonly nombre: string;
    readonly apellido: string;
    edad: number;

    nombre_completo(): string;
}

