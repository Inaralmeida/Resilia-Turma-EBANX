var gastos = [
  [32.98, 17.3, 28.4, 55.2],
  [25.7, 17.13, 13.0],
];

for (var i = 0; i < gastos.length; i++) {
  console.log(gastos[i]);
  document.write(
    `<p>Gasto na semana ${i}, Total R$ ${somaArray(gastos[i])}</p>`
  );
}

function somaArray(array) {
  var total = 0;
  //[5, 3, 4, 9, 2, 7, 8]
  for (var i = 0; i < array.length; i++) {
    // total = total + array[i]
    total += array[i];
  }

  return total;
}
