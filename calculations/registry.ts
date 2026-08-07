import { calculateResistance } from "./electricidad/ley-ohm";
import { calculatePower } from "./electricidad/potencia";
import { calculateCurrent } from "./electricidad/corriente-electrica";
import { calculateVoltage } from "./electricidad/voltaje";
import { calculateThreePhasePower } from "./electricidad/potencia-trifasica";
import { calculateApparentPower } from "./electricidad/potencia-aparente";
import { calculatePowerFactor } from "./electricidad/factor-potencia";
import { calculateEnergyConsumption } from "./electricidad/consumo-electrico";
import { calculateEnergyCost } from "./electricidad/costo-energia";
import { calculateHpToKw } from "./electricidad/conversor-hp-kw";
import { calculateKwToHp } from "./electricidad/conversor-kw-hp";
import { calculateMotorCurrent } from "./electricidad/corriente-motor";
import { calculateSynchronousSpeed } from "./electricidad/velocidad-sincronica";
import { calculateMotorSlip } from "./electricidad/deslizamiento-motor";
import { calculateMotorTorque } from "./electricidad/torque-motor";
import { calculateMotorEfficiency } from "./electricidad/eficiencia-motor";
import { calculateMechanicalPower } from "./electricidad/potencia-mecanica";




export interface CalculationStep {
  title: string;
  content: string;
}

export interface CalculationResult {
  outputs: Record<string, string | number>;

  formula: string;

  substitution: string;

  explanation: string;

  steps: CalculationStep[];
}

export type CalculationFunction = (
  values: Record<string, string>
) => CalculationResult;

export const calculatorRegistry: Record<string, CalculationFunction> = {
  "ley-ohm": calculateResistance,
  "potencia-electrica": calculatePower,
  "voltaje": calculateVoltage,
  "corriente-electrica": calculateCurrent,
  "potencia-trifasica": calculateThreePhasePower,
  "potencia-aparente": calculateApparentPower,
  "factor-potencia": calculatePowerFactor,
  "consumo-electrico": calculateEnergyConsumption,
  "costo-energia": calculateEnergyCost,
  "conversor-hp-kw": calculateHpToKw,
  "conversor-kw-hp": calculateKwToHp,
  "corriente-motor": calculateMotorCurrent,
  "velocidad-sincronica": calculateSynchronousSpeed,
  "deslizamiento-motor": calculateMotorSlip,
  "torque-motor": calculateMotorTorque,
  "eficiencia-motor": calculateMotorEfficiency,
  "potencia-mecanica": calculateMechanicalPower,
};