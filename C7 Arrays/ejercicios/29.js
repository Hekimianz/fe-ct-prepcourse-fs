function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (!Array.isArray(numeros) || numeros.length < 2) return null;

  const ordenados = numeros.slice().sort((a, b) => a - b);

  for (let i = 0; i < ordenados.length - 1; i++) {
    if (ordenados[i + 1] !== ordenados[i] + 1) {
      return ordenados[i] + 1;
    }
  }

  return null;
}

module.exports = encontrarNumeroFaltante;
