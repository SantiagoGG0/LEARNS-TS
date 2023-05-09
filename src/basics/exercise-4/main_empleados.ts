import { EmpleadoPorHora } from './empleado_hora';
import { Empleado } from "./empleado";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";
import { tipoEmpleado } from './tipo_empleado.enum';

const empleadoTiempoCompleto: Empleado =  new EmpleadoTiempoCompleto('Santiago Garcia', 1002030, 10000000000);
empleadoTiempoCompleto.mostrarInformación();
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()}`)

// Cast
console.log('Cast 1' ,(empleadoTiempoCompleto as EmpleadoTiempoCompleto).salarioMensual);

console.log('Cast 2' ,(<EmpleadoTiempoCompleto>empleadoTiempoCompleto).salarioMensual);

if(empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto){
    console.log(empleadoTiempoCompleto.salarioMensual);
}

console.log('===============================================')


const empleadoPorHora = new EmpleadoPorHora ('Maria Jose', 20013,tipoEmpleado.POR_HORA, 200000, 400);
empleadoPorHora.mostrarInformación();
console.log(`Salario: ${empleadoPorHora.calcularSalario()}`);
console.log(empleadoPorHora.horasTrabajadas);

const empleados = [empleadoTiempoCompleto, empleadoPorHora];
