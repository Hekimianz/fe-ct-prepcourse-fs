function esPositivo(num) {
  if (num === 0) return false;
  if (num > 0) return 'Es positivo';
  return 'Es negativo';
}

module.exports = esPositivo;
