import { EmpleadoPorHora } from './empleado_hora';
import { Empleado } from "./empleado";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";
import { tipoEmpleado } from './tipo_empleado.enum';

const empleadoTiempoCompleto: Empleado =  new EmpleadoTiempoCompleto('Santiago Garcia', 1002030, 10000000000);
empleadoTiempoCompleto.mostrarInformación();
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()}`)


console.log('===============================================')


const empleadoPorHora: Empleado = new EmpleadoPorHora ('Maria Jose', 20013,tipoEmpleado.POR_HORA, 200000, 400);
empleadoPorHora.mostrarInformación();
console.log(`Salario: ${empleadoPorHora.calcularSalario()}`)