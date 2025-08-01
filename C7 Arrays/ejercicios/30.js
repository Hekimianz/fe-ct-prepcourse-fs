function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const valores = new Set();
  for (let i = 0; i < numeros.length; i++) {
    if (valores.has(numeros[i])) {
      return numeros[i];
    }
    valores.add(numeros[i]);
  }
}

module.exports = encontrarElementoRepetido;
