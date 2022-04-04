function operacoes(n1, n2, func) {
  console.log(func(n1, n2));
}

operacoes(1, 5, function () {
  return 1 + 5;
});
