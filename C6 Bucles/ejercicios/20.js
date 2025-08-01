function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
    if (result > 100) {
      break;
    }
  }

  return result;
}

module.exports = sumarHastaNConBreak;
