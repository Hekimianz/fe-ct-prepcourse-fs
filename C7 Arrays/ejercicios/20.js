function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  return array.every((curr, i) => curr === array[0]);
}

module.exports = todosIguales;
