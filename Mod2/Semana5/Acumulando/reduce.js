const gastos = [
  112.46, //conta de luz
  42.89, //conta de água
  799.0, //Aluguel
  428.9, //mercado
];
const total = gastos.reduce((acumulador, atual) => acumulador + atual);
// console.log(total);

const ganhos = [15000, 2500, 1500, 3000];

const totalGanhos = ganhos.reduce((a, b) => a + b);

console.log(totalGanhos);

const gastos2 = [
  { total: 112.46 }, //conta de luz
  { total: 42.89 }, //conta de água
  { total: 799.0 }, //Aluguel
  { total: 428.9 }, //mercado
];

const total2 = gastos2.map((gasto) => gasto.total);
const reduzido = total2.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(total2);
console.log(reduzido);
