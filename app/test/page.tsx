import CalculatorRenderer from "@/components/calculator/CalculatorRenderer";
import { leyOhm } from "@/formulas/electricidad/ley-ohm";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <CalculatorRenderer tool={leyOhm} />
    </main>
  );
}