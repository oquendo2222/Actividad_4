import React from 'react'

export const Simulator = () => {
  return (
    <div>
      
    </div>
  )
}

/*const calcularCuota = (monto, tasaInteres, meses) => {
  const i = tasaInteres / 100 / 12; // convertir % a interés mensual
  const n = meses;

  if (i === 0) return monto / n; // caso sin interés

  const cuota =
    monto *
    (i * Math.pow(1 + i, n)) /
    (Math.pow(1 + i, n) - 1);

  return cuota.toFixed(2);
};const handleCalcular = () => {
  const cuota = calcularCuota(monto, interes, plazo);
  setCuotaMensual(cuota);
};
*/
