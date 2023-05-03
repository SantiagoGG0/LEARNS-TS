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

// Tuplas.
let exampleTuple:[string, null] = ['hola', null];

type statusCode = 'active' | 'inactive';
let studentStatus: statusCode = 'inactive';