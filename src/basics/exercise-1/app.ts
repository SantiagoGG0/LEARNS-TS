const teacher = {
    name: 'Santiago',
    lastName: 'Garcia',
    Age: 23,
};

console.log('Teacher is json:', teacher);

// Primitivos 
// Booleans
// Declaración implícita.
const  isTeacher = true; // Toma el valor con el cual fue declarado y ese es el tipo.
let isPlayer = true; // Toma el tipo del valor que le fue declarado.
isPlayer = false;

// Declaración explícita.
const hasErrors: boolean = false;
let isChampion: boolean = false;

let result:string = hasErrors ? 'Tiene errores' : 'No tiene errores';

// String
const firstName = 'Santiago';
const secondName = 'Garcia';

let fullName:string = `Su nombre es: ${firstName} ${secondName}, bienvenido`;
console.log(fullName.toUpperCase())

// Number 
let countStudents:number = 29;
let average:number = 4.5;

console.log( average.toFixed() )

// Array
let fruits = ['pera', 'banano',];
let sports:string[] = ['futbol', 'baloncesto'];

type stringOrNull = string | null;
//Union Types.
let students:Array<string | null> = ['Santiago', 'Maria', null]; 

console.log( students.filter((students) => students !== null ) );

// Tuples.
let exampleTuple:[string, null] = ['hola', null];

type statusCode = 'active' | 'inactive';
let studentStatus: statusCode = 'inactive';

// Any 
let working: any = 25;
working = 'hola';

// Funciones.
/**function nombreFunción(parámetro: tipoDato): tipoDatoQueRetornaLaFunción{}
 *  */ 
function validateValue( value: unknown ): boolean {

    // Unknown que es un tipo de dato que es desconocido.
    // Para cualquier validación que deba hacer con el dato.
    // Debo primero saber o validar que tipo de dato es.
    if ( typeof value ==='string') {
        console.log(value.trim().toUpperCase()); 
    }
        else if (typeof value == 'number'){
            console.log(value.toFixed());
    }

    if (value === ''){
        return false;
    }   else {
        return true;
    }
}

// Void.
function processResponse (saved: boolean){
    if(saved){
        console.log('Guardado');
    } else {
        console.log('Ocurrió un error');
    }
}

enum Role {
    Admin,
    Client,
}

let users: Array < { name: string, role: Role } > = [
    {
        name: 'Pepe',
        role:  Role.Admin
    },
    {
        name: 'Juan',
        role: Role.Client
    },
    {
        name: 'Fulano',
        role: Role.Client
    }
]

console.log( users.filter( (user) => user.role === Role.Client) );