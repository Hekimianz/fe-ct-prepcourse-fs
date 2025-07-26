function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sum = resultadosTest.reduce((a, b) => a + b);
  return sum / resultadosTest.length;
}

module.exports = promedioResultadosTest;
