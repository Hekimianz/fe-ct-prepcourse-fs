function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num > 99 && num < 999) return true;
  return false;
}

module.exports = tieneTresDigitos;
