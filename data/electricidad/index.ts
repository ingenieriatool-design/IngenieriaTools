import { leyOhm } from "./ley-ohm";
import { potenciaElectrica } from "./potencia-electrica";
import { corrienteElectrica } from "./corriente-electrica";
import { voltaje } from "./voltaje";
import { potenciaTrifasica } from "./potencia-trifasica";
import { potenciaAparente } from "./potencia-aparente";
import { factorPotencia } from "./factor-potencia";
import { consumoElectrico } from "./consumo-electrico";
import { costoEnergia } from "./costo-energia";
import { conversorHpKw } from "./conversor-hp-kw";
import { conversorKwHp } from "./conversor-kw-hp";
import { corrienteMotor } from "./corriente-motor";
import { velocidadSincronica } from "./velocidad-sincronica";
import { deslizamientoMotor } from "./deslizamiento-motor";
import { torqueMotor } from "./torque-motor";
import { eficienciaMotor } from "./eficiencia-motor";
import { potenciaMecanica } from "./potencia-mecanica";



export {
  leyOhm,
  potenciaElectrica,
  corrienteElectrica,
};

export const electricidadTools = [
  leyOhm,
  potenciaElectrica,
  corrienteElectrica,
  voltaje,
  potenciaTrifasica,
  potenciaAparente,
  factorPotencia,
  consumoElectrico,
  costoEnergia,
  conversorHpKw,
  conversorKwHp,
  corrienteMotor,
  velocidadSincronica,
deslizamientoMotor,
torqueMotor,
eficienciaMotor,
potenciaMecanica,
];